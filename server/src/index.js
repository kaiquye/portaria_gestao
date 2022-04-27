const express = require('express');
// server para o websocket
const server = require('http').createServer(express());
const io = require('../src/models/WebSocket');
const Cors = require('../src/midlleware/cors');

class Server {
    App;

    constructor() {
        this.App = express();
        this.middlleware();
        this.routes();
    }

    middlleware() {
        this.App.use(Cors.Config());
    }

    routes() {
        this.App.get('/teste', (req, res) => {
            console.log('testando');
        })
    }

    StartServer() {
        this.
            this.App.listen(4011, () => console.log('rodando...'))
    }

}

(() => {
    // configura o ambiente P/D
    const app = new Server();
    io.Start(server) // iniciando o websocket
    app.StartServer(); // iniciando o servidor
})()
