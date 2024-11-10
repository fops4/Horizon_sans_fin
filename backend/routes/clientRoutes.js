const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM client', (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
});

router.get('/:id', (req, res) => {
    db.query('SELECT * FROM client WHERE id_client = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(result);
    });
});

router.post('/', (req, res) => {
    const { nom_client, prenom_client, adresse_client, numero_client, email_client } = req.body;
    db.query('INSERT INTO client (nom_client, prenom_client, adresse_client, numero_client, email_client) VALUES (?, ?, ?, ?, ?)',
        [nom_client, prenom_client, adresse_client, numero_client, email_client], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.status(201).json({ message: 'Client ajouté', id_client: result.insertId });
    });
});

router.put('/:id', (req, res) => {
    const { nom_client, prenom_client, adresse_client, numero_client, email_client } = req.body;
    db.query('UPDATE client SET nom_client = ?, prenom_client = ?, adresse_client = ?, numero_client = ?, email_client = ? WHERE id_client = ?',
        [nom_client, prenom_client, adresse_client, numero_client, email_client, req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Client mis à jour' });
    });
});

router.delete('/:id', (req, res) => {
    db.query('DELETE FROM client WHERE id_client = ?', [req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Client supprimé' });
    });
});

module.exports = router;
