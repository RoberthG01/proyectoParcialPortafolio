const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Middleware para servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('home', {
      nombre: 'Rudy Galindo',
      titulo: 'Curso de Node'
  });
})

app.get('/pastor_aleman', (req, res) => {
  res.render('pastor_aleman', {
      nombre: 'Rudy Galindo',
      titulo: 'Curso de Node'
  });
})

app.get('/chihuahua', (req, res) => {
  res.render('chihuahua', {
      nombre: 'Rudy Galindo',
      titulo: 'Curso de Node'
  });
})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
