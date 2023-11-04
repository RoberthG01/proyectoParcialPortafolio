const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Middleware para servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/pastor_aleman', (req, res) => {
  res.render('pastor_aleman');
})

app.get('/chihuahua', (req, res) => {
  res.render('chihuahua');
})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
