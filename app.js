const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Middleware para servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  // Renderiza directamente el archivo HTML (home.hbs en tu caso)
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/pastor_aleman', (req, res) => {
  // Renderiza directamente el archivo HTML (pastor_aleman.hbs en tu caso)
  res.sendFile(path.join(__dirname, 'views', 'pastor_aleman.html'));
});

app.get('/chihuahua', (req, res) => {
  // Renderiza directamente el archivo HTML (chihuahua.hbs en tu caso)
  res.sendFile(path.join(__dirname, 'views', 'chihuahua.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
