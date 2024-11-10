const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM reservation', (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
});

router.get('/:id', (req, res) => {
    db.query('SELECT * FROM reservation WHERE id_reservation = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(result);
    });
});

router.post('/', (req, res) => {
    const { id_client, id_voyage, date_reservation, statut } = req.body;
    db.query('INSERT INTO reservation (id_client, id_voyage, date_reservation, statut) VALUES (?, ?, ?, ?)', 
    [id_client, id_voyage, date_reservation, statut], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.status(201).json({ message: 'Réservation ajoutée', id_reservation: result.insertId });
    });
});

router.put('/:id', (req, res) => {
    const { id_client, id_voyage, date_reservation, statut } = req.body;
    db.query('UPDATE reservation SET id_client = ?, id_voyage = ?, date_reservation = ?, statut = ? WHERE id_reservation = ?', 
    [id_client, id_voyage, date_reservation, statut, req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Réservation mise à jour' });
    });
});

router.delete('/:id', (req, res) => {
    db.query('DELETE FROM reservation WHERE id_reservation = ?', [req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Réservation supprimée' });
    });
});

module.exports = router;
