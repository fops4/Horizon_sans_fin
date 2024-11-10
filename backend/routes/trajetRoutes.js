const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM trajet', (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
});

router.get('/:id', (req, res) => {
    db.query('SELECT * FROM trajet WHERE id_trajet = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(result);
    });
});

router.post('/', (req, res) => {
    const { ville_depart, ville_arrivee } = req.body;
    db.query('INSERT INTO trajet (ville_depart, ville_arrivee) VALUES (?, ?)', 
    [ville_depart, ville_arrivee], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.status(201).json({ message: 'Trajet ajouté', id_trajet: result.insertId });
    });
});

router.put('/:id', (req, res) => {
    const { ville_depart, ville_arrivee } = req.body;
    db.query('UPDATE trajet SET ville_depart = ?, ville_arrivee = ? WHERE id_trajet = ?', 
    [ville_depart, ville_arrivee, req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Trajet mis à jour' });
    });
});

router.delete('/:id', (req, res) => {
    db.query('DELETE FROM trajet WHERE id_trajet = ?', [req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Trajet supprimé' });
    });
});

module.exports = router;
