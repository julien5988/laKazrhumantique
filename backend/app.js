const app = require('./server');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});