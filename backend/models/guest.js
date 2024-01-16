const mongoose = require('mongoose');

const emailValidator = {
  validator: function (value) {
    // Expression régulière pour vérifier le format de l'adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },
  message: 'Format d\'adresse e-mail non valide',
};

const guestSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true, validate: emailValidator },
  phoneNumber: { type: String },
  country: { type: String },
  specialRequests: { type: String },
});

module.exports = mongoose.model('guest',guestSchema);