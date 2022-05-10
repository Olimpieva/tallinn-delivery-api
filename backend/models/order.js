const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const orderSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['OPEN', 'ACCEPTED', 'INPROGRESS', 'DELIVERED'],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
  time: {
    type: Date,
    required: true,
  },
});

orderSchema.plugin(AutoIncrement, { inc_field: 'orderId' });

module.exports = mongoose.model('order', orderSchema);
