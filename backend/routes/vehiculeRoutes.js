const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtenir tous les véhicules
router.get('/', (req, res) => {
    db.query('SELECT * FROM vehicule', (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
});

// Obtenir un véhicule par immatriculation
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM vehicule WHERE immatriculation = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(result);
    });
});

// Ajouter un nouveau véhicule
router.post('/', (req, res) => {
    const { immatriculation, nombre_place, id_modele } = req.body;
    db.query('INSERT INTO vehicule (immatriculation, nombre_place, id_modele) VALUES (?, ?, ?)', 
    [immatriculation, nombre_place, id_modele], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.status(201).json({ message: 'Véhicule ajouté', immatriculation: result.insertId });
    });
});

// Mettre à jour un véhicule par immatriculation
router.put('/:id', (req, res) => {
    const { nombre_place, id_modele } = req.body;
    db.query('UPDATE vehicule SET nombre_place = ?, id_modele = ? WHERE immatriculation = ?', 
    [nombre_place, id_modele, req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Véhicule mis à jour' });
    });
});

// Supprimer un véhicule par immatriculation
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM vehicule WHERE immatriculation = ?', [req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Véhicule supprimé' });
    });
});

module.exports = router;
