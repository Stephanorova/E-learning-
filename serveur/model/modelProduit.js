const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: String,
  category: String,
  createdAt: { type: Date, default: Date.now }
});

const Produit = mongoose.model("Produit", productSchema)

exports.Produit = Produit;