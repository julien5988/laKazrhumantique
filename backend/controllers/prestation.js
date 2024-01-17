const Prestation = require("../models/prestation")

exports.insertPrestation = async (req, res) => {
    try {
        // Destructuration des données de req.body
        const { name, description, price } = req.body;

        // Vérification de la présence des données requises
        if (!name || !description || !price) {
            return res.status(400).json({ message: "Veuillez fournir toutes les données nécessaires." });
        }

        // Création d'une nouvelle instance de Prestation
        const newPrestation = new Prestation({
            name,
            description,
            price,
        });

        // Enregistrement de la prestation dans la base de données
        const prestationEnregistre = await newPrestation.save();

        // Réponse réussie avec la prestation enregistrée
        res.status(201).json(prestationEnregistre);
    } catch (error) {
        // Gestion des erreurs lors de l'ajout de la prestation
        console.error("Erreur lors de l'ajout d'une prestation :", error);
        res.status(500).json({ message: "Erreur serveur lors de l'ajout d'une prestation." });
    }
};