const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      address: { type: String, required: true }
    },
    products: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number,
      price: Number
    }],
    total: { type: Number, required: true },
    status: { type: String, default: 'pending' },
    orderDate: { type: Date, default: Date.now }
  });

  const Order = mongoose.model('Order', orderSchema)
  exports.Order = Order

