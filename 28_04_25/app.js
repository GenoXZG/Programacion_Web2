const serverCreateHTTP = require('http');
const host = "localhost"
const port = 3310;

// create server

const server = serverCreateHTTP.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo desde node');
  });

server.listen(port, host, () => {
    console.log(`Servidor corriendo en http://${host}:${port}/`);
});

