const express = require('express');
const path = require('path');
require('dotenv').config(); // Cargar variables de entorno desde .env
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Configurar el motor de plantillas Handlebars
app.set('view engine', 'hbs');

// Establecer la carpeta de vistas
app.set('views', path.join(__dirname, 'views'));

// Configurar el directorio de parciales
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Configurar el manejo de archivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/proyecto1', (req, res) => {
  res.render('proyecto1css');
});

app.get('/proyecto2', (req, res) => {
  res.render('proyecto2css');
});

app.get('/proyecto3', (req, res) => {
  res.render('proyecto3css');
});

app.get('/proyecto4', (req, res) => {
  res.render('proyecto4css');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
