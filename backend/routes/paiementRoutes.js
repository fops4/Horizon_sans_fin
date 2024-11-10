const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM paiement', (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
});

router.get('/:id', (req, res) => {
    db.query('SELECT * FROM paiement WHERE id_paiement = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(result);
    });
});

router.post('/', (req, res) => {
    const { montant, statut, date, mode, id_client, id_voyage } = req.body;
    db.query('INSERT INTO paiement (montant, statut, date, mode, id_client, id_voyage) VALUES (?, ?, ?, ?, ?, ?)', 
    [montant, statut, date, mode, id_client, id_voyage], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.status(201).json({ message: 'Paiement ajouté', id_paiement: result.insertId });
    });
});

router.put('/:id', (req, res) => {
    const { montant, statut, date, mode, id_client, id_voyage } = req.body;
    db.query('UPDATE paiement SET montant = ?, statut = ?, date = ?, mode = ?, id_client = ?, id_voyage = ? WHERE id_paiement = ?', 
    [montant, statut, date, mode, id_client, id_voyage, req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Paiement mis à jour' });
    });
});

router.delete('/:id', (req, res) => {
    db.query('DELETE FROM paiement WHERE id_paiement = ?', [req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Paiement supprimé' });
    });
});

module.exports = router;
