// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Import des routes
const avisRoutes = require('./routes/avisRoutes');
const chauffeurRoutes = require('./routes/chauffeurRoutes');
const classeRoutes = require('./routes/classeRoutes');
const clientRoutes = require('./routes/clientRoutes');
const colisRoutes = require('./routes/colisRoutes');
const compteRoutes = require('./routes/compteRoutes');
const messageRoutes = require('./routes/messageRoutes');
const modeleRoutes = require('./routes/modeleRoutes');
const paiementRoutes = require('./routes/paiementRoutes');
const personnelRoutes = require('./routes/personnelRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const trajetRoutes = require('./routes/trajetRoutes');
const vehiculeRoutes = require('./routes/vehiculeRoutes');
const voyageRoutes = require('./routes/voyageRoutes');

app.use(bodyParser.json());

// Utilisation des routes pour chaque table
app.use('/api/avis', avisRoutes);
app.use('/api/chauffeurs', chauffeurRoutes);
app.use('/api/classes', classeRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/colis', colisRoutes);
app.use('/api/comptes', compteRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/modeles', modeleRoutes);
app.use('/api/paiements', paiementRoutes);
app.use('/api/personnels', personnelRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/trajets', trajetRoutes);
app.use('/api/vehicules', vehiculeRoutes);
app.use('/api/voyages', voyageRoutes);

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
