// routes/avisRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtenir tous les avis
router.get('/', (req, res) => {
    db.query('SELECT * FROM avis', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

// Obtenir un avis par ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM avis WHERE id_avis = ?', [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Ajouter un avis
router.post('/', (req, res) => {
    const { id_client, id_voyage, contenu, date_avis } = req.body;
    db.query('INSERT INTO avis (id_client, id_voyage, contenu, date_avis) VALUES (?, ?, ?, ?)', 
    [id_client, id_voyage, contenu, date_avis], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Avis ajouté', id_avis: result.insertId });
        }
    });
});

// Mettre à jour un avis
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { id_client, id_voyage, contenu, date_avis } = req.body;
    db.query('UPDATE avis SET id_client = ?, id_voyage = ?, contenu = ?, date_avis = ? WHERE id_avis = ?', 
    [id_client, id_voyage, contenu, date_avis, id], (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Avis mis à jour' });
        }
    });
});

// Supprimer un avis
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM avis WHERE id_avis = ?', [id], (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Avis supprimé' });
        }
    });
});

module.exports = router;
