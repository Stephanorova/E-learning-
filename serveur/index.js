const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connexion MongoDB

// Modèles
const Produit = mongoose.model('Produit', {
  nom: String,
  prix: Number,
  quantite: Number,
  description: String
});

const Commande = mongoose.model('Commande', {
  client: String,
  produits: [{
    produitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produit' },
    quantite: Number,
    prix: Number
  }],
  total: Number,
  date: { type: Date, default: Date.now }
});

// Routes pour les produits
app.get('/api/produits', async (req, res) => {
  try {
    const produits = await Produit.find();
    res.json(produits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/produits', async (req, res) => {
  try {
    const produit = new Produit(req.body);
    await produit.save();
    res.status(201).json(produit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Routes pour les commandes
app.get('/api/commandes', async (req, res) => {
  try {
    const commandes = await Commande.find().populate('produits.produitId');
    res.json(commandes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/commandes', async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { client, produits } = req.body;
    
    // Vérifier et mettre à jour le stock
    for (let item of produits) {
      const produit = await Produit.findById(item.produitId);
      if (produit.quantite < item.quantite) {
        throw new Error(`Stock insuffisant pour ${produit.nom}`);
      }
      
      await Produit.findByIdAndUpdate(
        item.produitId,
        { $inc: { quantite: -item.quantite } }
      );
    }
    
    // Créer la commande
    const commande = new Commande({
      client,
      produits,
      total: produits.reduce((acc, item) => acc + (item.prix * item.quantite), 0)
    });
    
    await commande.save();
    await session.commitTransaction();
    res.status(201).json(commande);
  } catch (error) {
    await session.abortTransaction();
    res.status(400).json({ message: error.message });
  } finally {
    session.endSession();
  }
});

// Route pour les statistiques
app.get('/api/stats/ventes', async (req, res) => {
  try {
    const stats = await Commande.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$date" }
          },
          montant: { $sum: "$total" }
        }
      },
      {
        $project: {
          _id: 0,
          date: "$_id",
          montant: 1
        }
      },
      { $sort: { date: 1 } }
    ]);
    
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
// Connexion MongoDB
mongoose.connect('mongodb://localhost:27017/gestion-app', {})
.then(()=>{
    console.log("connexion successfuly...");
})
.catch(err =>{
    console.log(err);
    
})
