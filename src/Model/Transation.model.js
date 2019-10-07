const mongoose = require('../Server/database');
const uuid = require('uuid/v4');

const TransationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  _id: {
    type: String,
    default: uuid
  },
  description: {
    type: String,
    required: true,
    lowercase: true
  },
  value: {
    type: Number,
    required: true
  },
  transationType: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
})

const Transation = mongoose.model('Transation', TransationSchema);

module.exports = Transation