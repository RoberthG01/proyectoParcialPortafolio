const express = require('express')
const app = express()
const hbs = require('hbs')
require ('dotenv').config();
const port = process.env.PORT;

app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Rudy Galindo",
  });
});

app.get("/proyecto1css", (req, res) => {
  res.render("proyecto1css", {
    titulo: "Base de Datos Notas para un Colegio",
  });
});

app.get("/proyecto2css", (req, res) => {
  res.render("proyecto2css", {
    titulo: "Migración de Oracle",
  });
});
app.get("/yargs", (req, res) => {
  res.render("yargs", {
    titulo: "Yargs",
  });
});
app.get("/WebServer", (req, res) => {
  res.render("WebServer", {
    titulo: "Web Server",
  });
});

app.get("/proyecto1css", (req, res) => {
  res.sendFile(__dirname + "/public/proyecto1css");
});
app.get("/SistemaSolar", (req, res) => {
  res.sendFile(__dirname + "/public/proyecto2css");
});
app.get("/Sysinfo", (req, res) => {
  res.sendFile(__dirname + "/public/yargs");
});
app.get("/Compilador", (req, res) => {
  res.sendFile(__dirname + "/public/WebServer");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});