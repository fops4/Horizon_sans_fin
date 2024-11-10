const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM message', (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
});

router.get('/:id', (req, res) => {
    db.query('SELECT * FROM message WHERE id_message = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(result);
    });
});

router.post('/', (req, res) => {
    const { libelle, date, heure, id_client } = req.body;
    db.query('INSERT INTO message (libelle, date, heure, id_client) VALUES (?, ?, ?, ?)', [libelle, date, heure, id_client], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.status(201).json({ message: 'Message ajouté', id_message: result.insertId });
    });
});

router.put('/:id', (req, res) => {
    const { libelle, date, heure, id_client } = req.body;
    db.query('UPDATE message SET libelle = ?, date = ?, heure = ?, id_client = ? WHERE id_message = ?', [libelle, date, heure, id_client, req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Message mis à jour' });
    });
});

router.delete('/:id', (req, res) => {
    db.query('DELETE FROM message WHERE id_message = ?', [req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Message supprimé' });
    });
});

module.exports = router;
