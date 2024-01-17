const mongoose = require('mongoose');

const prestationSchema = new mongoose.Schema({
    name: {type: String , required :true },
    description: {type: String , required:true},
    price: { type: Number, min: 0 }
});

module.exports = mongoose.model('prestation', prestationSchema);

