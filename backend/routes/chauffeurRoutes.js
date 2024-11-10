const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM chauffeur', (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
});

router.get('/:id', (req, res) => {
    db.query('SELECT * FROM chauffeur WHERE id_chauffeur = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(result);
    });
});

router.post('/', (req, res) => {
    const { nom_chauffeur, adresse_chauffeur, numero_chauffeur, email_chauffeur } = req.body;
    db.query('INSERT INTO chauffeur (nom_chauffeur, adresse_chauffeur, numero_chauffeur, email_chauffeur) VALUES (?, ?, ?, ?)',
        [nom_chauffeur, adresse_chauffeur, numero_chauffeur, email_chauffeur], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.status(201).json({ message: 'Chauffeur ajouté', id_chauffeur: result.insertId });
    });
});

router.put('/:id', (req, res) => {
    const { nom_chauffeur, adresse_chauffeur, numero_chauffeur, email_chauffeur } = req.body;
    db.query('UPDATE chauffeur SET nom_chauffeur = ?, adresse_chauffeur = ?, numero_chauffeur = ?, email_chauffeur = ? WHERE id_chauffeur = ?',
        [nom_chauffeur, adresse_chauffeur, numero_chauffeur, email_chauffeur, req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Chauffeur mis à jour' });
    });
});

router.delete('/:id', (req, res) => {
    db.query('DELETE FROM chauffeur WHERE id_chauffeur = ?', [req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Chauffeur supprimé' });
    });
});

module.exports = router;
