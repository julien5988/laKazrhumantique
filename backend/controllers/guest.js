// guestController.js
const Guest = require('../models/guest');

// Middleware pour la création d'un guest
exports.createGuest = async (req, res) => {
  try {
    // Destructurer les données du corps de la requête
    const { firstName, lastName, email, phoneNumber, country, specialRequests } = req.body;

    // Vérifier si toutes les données requises sont présentes
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ message: "Veuillez fournir toutes les données nécessaires." });
    }

    // Créer une nouvelle instance de Guest avec les données du corps de la requête
    const newGuest = new Guest({
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      specialRequests,
    });

    // Sauvegarder dans la base de données
    const savedGuest = await newGuest.save();

    // Répondre avec le guest enregistré
    res.status(201).json(savedGuest);
  } catch (error) {
    console.error("Erreur lors de l'insertion du guest:", error);
    res.status(500).json({ message: "Erreur serveur lors de l'insertion du guest." });
  }
};
