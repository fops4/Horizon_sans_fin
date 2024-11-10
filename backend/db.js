// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',      // Remplacez par votre utilisateur MySQL
    password: '',  // Remplacez par votre mot de passe MySQL
    database: 'horisonsansfin'
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
    } else {
        console.log('Connecté à la base de données MySQL.');
    }
});

module.exports = db;
