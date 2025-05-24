const express = require('express');
const router = express.Router();
const mysql = require('mysql2');



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'genox123',
    database: 'node',
    port: 3306
});

// Validacion de la conexion

db.connect(err => {
    if(err){
        console.log("Error en la conexion: " + err.message);
    }
    else{
        console.log("Conexion establecida");
    }
});
//mostrar registros

router.get('/', (req, res) =>{
    const request = 'SELECT * FROM users';
    db.query(request,(err, result)=>{
        if(err){
            console.log("No existe la tabla");
        }
        else{
            console.log("Datos extraidos");
            res.render('index', {users: result})
        }
    });
});

// agregar usuario

router.post('/add', (req, res) =>{
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    
    db.query(query, [name, email], (err, result) => {
        if (err) {
            console.error('Error al insertar:', err.message);
            res.send('Error al agregar usuario');
        } else {
            console.log('Usuario agregado:', result.insertId);
            res.redirect('/');
        }
    });
});

// eliminar

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error al eliminar:', err.message);
            res.send('Error al eliminar usuario');
        } else {
            res.redirect('/');
            console.log("Usuario eliminado");
        }
    });
});

// editar en formulario
router.get('/edit/:id', (req, res) =>{
    const id = req.params.id;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err,result) =>{
        if(err){
           console.log(err.message); 
        }
        else{
            res.render('edit', { user: result[0] });
           
            console.log(result);
        }
    });
    
});
// commit a los cambios
router.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;