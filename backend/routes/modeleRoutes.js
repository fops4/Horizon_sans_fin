const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM modele', (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
});

router.get('/:id', (req, res) => {
    db.query('SELECT * FROM modele WHERE id_modele = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(result);
    });
});

router.post('/', (req, res) => {
    const { nom_modele, marque } = req.body;
    db.query('INSERT INTO modele (nom_modele, marque) VALUES (?, ?)', [nom_modele, marque], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.status(201).json({ message: 'Modèle ajouté', id_modele: result.insertId });
    });
});

router.put('/:id', (req, res) => {
    const { nom_modele, marque } = req.body;
    db.query('UPDATE modele SET nom_modele = ?, marque = ? WHERE id_modele = ?', [nom_modele, marque, req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Modèle mis à jour' });
    });
});

router.delete('/:id', (req, res) => {
    db.query('DELETE FROM modele WHERE id_modele = ?', [req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Modèle supprimé' });
    });
});

module.exports = router;
