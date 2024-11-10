const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM compte', (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
});

router.get('/:id', (req, res) => {
    db.query('SELECT * FROM compte WHERE id_compte = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(result);
    });
});

router.post('/', (req, res) => {
    const { login, password, id_personnel } = req.body;
    db.query('INSERT INTO compte (login, password, id_personnel) VALUES (?, ?, ?)', [login, password, id_personnel], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.status(201).json({ message: 'Compte ajouté', id_compte: result.insertId });
    });
});

router.put('/:id', (req, res) => {
    const { login, password, id_personnel } = req.body;
    db.query('UPDATE compte SET login = ?, password = ?, id_personnel = ? WHERE id_compte = ?', [login, password, id_personnel, req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Compte mis à jour' });
    });
});

router.delete('/:id', (req, res) => {
    db.query('DELETE FROM compte WHERE id_compte = ?', [req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Compte supprimé' });
    });
});

module.exports = router;
