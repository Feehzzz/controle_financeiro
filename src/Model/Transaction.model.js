const mongoose = require('../Server/database');
const uuid = require('uuid/v4');

const TransanctionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  _id: {
    type: uuid,
    default: uuid()
  },
  value: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    lowercase: true
  },
  date: {
    type: Date,
    default: Date.now
  },
})

const Transaction = mongoose.model('Transaction', TransanctionSchema);

module.exports = Transaction