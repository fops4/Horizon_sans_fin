const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM classe', (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
});

router.get('/:id', (req, res) => {
    db.query('SELECT * FROM classe WHERE id_classe = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(result);
    });
});

router.post('/', (req, res) => {
    const { nom_classe, prix } = req.body;
    db.query('INSERT INTO classe (nom_classe, prix) VALUES (?, ?)', [nom_classe, prix], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.status(201).json({ message: 'Classe ajoutée', id_classe: result.insertId });
    });
});

router.put('/:id', (req, res) => {
    const { nom_classe, prix } = req.body;
    db.query('UPDATE classe SET nom_classe = ?, prix = ? WHERE id_classe = ?', [nom_classe, prix, req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Classe mise à jour' });
    });
});

router.delete('/:id', (req, res) => {
    db.query('DELETE FROM classe WHERE id_classe = ?', [req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Classe supprimée' });
    });
});

module.exports = router;
    