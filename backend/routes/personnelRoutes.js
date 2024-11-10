const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM personnel', (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
});

router.get('/:id', (req, res) => {
    db.query('SELECT * FROM personnel WHERE id_personnel = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(result);
    });
});

router.post('/', (req, res) => {
    const { nom_personnel, adresse_personnel, numero_personnel, email_personnel } = req.body;
    db.query('INSERT INTO personnel (nom_personnel, adresse_personnel, numero_personnel, email_personnel) VALUES (?, ?, ?, ?)', 
    [nom_personnel, adresse_personnel, numero_personnel, email_personnel], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.status(201).json({ message: 'Personnel ajouté', id_personnel: result.insertId });
    });
});

router.put('/:id', (req, res) => {
    const { nom_personnel, adresse_personnel, numero_personnel, email_personnel } = req.body;
    db.query('UPDATE personnel SET nom_personnel = ?, adresse_personnel = ?, numero_personnel = ?, email_personnel = ? WHERE id_personnel = ?', 
    [nom_personnel, adresse_personnel, numero_personnel, email_personnel, req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Personnel mis à jour' });
    });
});

router.delete('/:id', (req, res) => {
    db.query('DELETE FROM personnel WHERE id_personnel = ?', [req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Personnel supprimé' });
    });
});

module.exports = router;
