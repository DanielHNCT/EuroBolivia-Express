const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir les fichiers statiques (comme ton HTML, CSS et JS)
app.use(express.static(path.join(__dirname)));

// Route de test pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré à http://localhost:${port}`);
});
