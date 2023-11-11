const express = require('express');
require('dotenv').config();
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Configurar el motor de plantillas Handlebars
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + 'partials');

// Establecer la carpeta de vistas (ruta directa)
app.set('views', __dirname + '/views');

// Configurar el manejo de archivos estáticos
app.use('/public', express.static(__dirname + '/public'));

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
