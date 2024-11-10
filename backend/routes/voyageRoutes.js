const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtenir tous les voyages
router.get('/', (req, res) => {
    db.query('SELECT * FROM voyage', (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
});

// Obtenir un voyage par ID
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM voyage WHERE id_voyage = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(result);
    });
});

// Ajouter un nouveau voyage
router.post('/', (req, res) => {
    const { heure_depart, heure_arrivee, date, id_classe, id_personnel, id_chauffeur, id_vehicule, id_trajet } = req.body;
    db.query('INSERT INTO voyage (heure_depart, heure_arrivee, date, id_classe, id_personnel, id_chauffeur, id_vehicule, id_trajet) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
    [heure_depart, heure_arrivee, date, id_classe, id_personnel, id_chauffeur, id_vehicule, id_trajet], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.status(201).json({ message: 'Voyage ajouté', id_voyage: result.insertId });
    });
});

// Mettre à jour un voyage par ID
router.put('/:id', (req, res) => {
    const { heure_depart, heure_arrivee, date, id_classe, id_personnel, id_chauffeur, id_vehicule, id_trajet } = req.body;
    db.query('UPDATE voyage SET heure_depart = ?, heure_arrivee = ?, date = ?, id_classe = ?, id_personnel = ?, id_chauffeur = ?, id_vehicule = ?, id_trajet = ? WHERE id_voyage = ?', 
    [heure_depart, heure_arrivee, date, id_classe, id_personnel, id_chauffeur, id_vehicule, id_trajet, req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Voyage mis à jour' });
    });
});

// Supprimer un voyage par ID
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM voyage WHERE id_voyage = ?', [req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Voyage supprimé' });
    });
});

module.exports = router;
