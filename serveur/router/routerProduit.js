const express = require('express');
const router = express.Router();
const { Produit } = require('../model/modelProduit');


router.get('/', async (req, res) => {
  try {
    const products = await Produit.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const product = new Produit(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports= router;