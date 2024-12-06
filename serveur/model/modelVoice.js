const mongoose = require('mongoose')


const invoiceSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    invoiceNumber: { type: String, required: true, unique: true },
    dueDate: Date,
    status: { type: String, default: 'unpaid' },
    createdAt: { type: Date, default: Date.now }
  });

  const Voice = mongoose.model('Voice', invoiceSchema)
  exports.Voice = Voice