require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;
console.log(process.env.PORT);

app.set("view engine", "hbs");

hbs.registerPartials(__dirname+("/views/partials"))

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/proyecto1css', (req, res) => {
  res.render('proyecto1css', { backLink: '/' })
})

app.get('/proyecto2css', (req, res) => {
  res.render('proyecto2css', { backLink: '/' })
})

app.get('/proyecto3css', (req, res) => {
  res.render('proyecto3css', { backLink: '/' })
})

app.get('/proyecto4css', (req, res) => {
  res.render('proyecto4css', { backLink: '/' })
})

app.listen(port, () => {
  console.log(`Servidor de ejecución en http://localhost:${port}`);
});
