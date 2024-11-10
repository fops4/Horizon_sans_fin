const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM colis', (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
});

router.get('/:id', (req, res) => {
    db.query('SELECT * FROM colis WHERE id_colis = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(result);
    });
});

router.post('/', (req, res) => {
    const { description, prix, destinataire, statut, numero_destinataire, ville_depart, ville_arrivee, id_client, id_voyage } = req.body;
    db.query('INSERT INTO colis (description, prix, destinataire, statut, numero_destinataire, ville_depart, ville_arrivee, id_client, id_voyage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [description, prix, destinataire, statut, numero_destinataire, ville_depart, ville_arrivee, id_client, id_voyage], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.status(201).json({ message: 'Colis ajouté', id_colis: result.insertId });
    });
});

router.put('/:id', (req, res) => {
    const { description, prix, destinataire, statut, numero_destinataire, ville_depart, ville_arrivee, id_client, id_voyage } = req.body;
    db.query('UPDATE colis SET description = ?, prix = ?, destinataire = ?, statut = ?, numero_destinataire = ?, ville_depart = ?, ville_arrivee = ?, id_client = ?, id_voyage = ? WHERE id_colis = ?',
        [description, prix, destinataire, statut, numero_destinataire, ville_depart, ville_arrivee, id_client, id_voyage, req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Colis mis à jour' });
    });
});

router.delete('/:id', (req, res) => {
    db.query('DELETE FROM colis WHERE id_colis = ?', [req.params.id], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Colis supprimé' });
    });
});

module.exports = router;
