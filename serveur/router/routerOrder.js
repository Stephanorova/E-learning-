const express = require('express');
const { Order } = require('../model/modelOrder');
const { Produit } = require('../model/modelProduit');
const router = express.Router();


router.post('/', async (req, res) => {
    const order = new Order(req.body);
    try {
      // Update stock levels
      for (let item of req.body.products) {
        const product = await Produit.findById(item.product);
        product.stock -= item.quantity;
        await product.save();
      }
      const newOrder = await order.save();
      res.status(201).json(newOrder);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  module.exports = router;
  
  