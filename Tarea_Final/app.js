const express = require('express');
const mysql = require('mysql2');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();
const port = 3009;
app.use(bodyparser.urlencoded({extended: false}));



app.use(express.static(path.join(__dirname, 'public')));


// Rutas
const routes = require('./routes/user');

// configuracion de plantillas

app.set('view engine', 'ejs');

// redireccion a las rutas
app.use('/', routes);   

app.listen(port,()=>{
     console.log(`Server en linea:${port}`);
}); 


