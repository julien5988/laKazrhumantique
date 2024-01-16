const Gite = require('../models/gite');

// Fonction pour insérer un nouveau gite
exports.insererGite = async (req, res) => {
    try {
        // Destructurer les données du corps de la requête
        const { name, description, capacity, price, availability } = req.body;

        // Vérifier si toutes les données requises sont présentes
        if (!name || !capacity || !price) {
            return res.status(400).json({ message: "Veuillez fournir toutes les données nécessaires." });
        }

        // Créer une nouvelle instance de Gite avec les données du corps de la requête
        const nouveauGite = new Gite({
            name,
            description,
            capacity,
            price,
            availability,
        });

        // Sauvegarder dans la base de données
        const giteEnregistre = await nouveauGite.save();

        // Répondre avec le gite enregistré
        res.status(201).json(giteEnregistre);
    } catch (error) {
        console.error("Erreur lors de l'insertion du gite:", error);
        res.status(500).json({ message: "Erreur serveur lors de l'insertion du gite." });
    }
};
