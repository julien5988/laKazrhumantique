const mongoose = require ('mongoose');

const giteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    capacity: { type: Number, min: 1, max: 2, default: 2 },
    price: { type: Number, min: 0 },
    status: { type: String, enum: ['reserved', 'available'], default: 'available' },
    reservedDates: [{ type: Date }],
  });

module.exports = mongoose.model('gite',giteSchema);