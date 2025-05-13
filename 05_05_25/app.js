const express = require('express');
const path = require('path');

const app = express();

const port = 3059;

app.get("/", (req, res) =>{
    //res.sendFile("D:/ICO/Sexto Semestre/Programacion Web 2/05_05_25/index.html");
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.get("/nosotros.html", (req, res) =>{
    res.sendFile(path.join(__dirname+"/nosotros.html"));
});

app.get("/cursos.html", (req, res) =>{
    res.sendFile(path.join(__dirname+"/cursos.html"));
});

app.get("/entrada.html", (req, res) =>{
    res.sendFile(path.join(__dirname+"/entrada.html"));
});
app.get("/contacto.html", (req, res) =>{
    res.sendFile(path.join(__dirname+"/contacto.html"));
});


app.listen(port,()=> {
    console.log(`localhost:${port}`)
});