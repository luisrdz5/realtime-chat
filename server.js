const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket')
const router = require('./network/routes');
const db = require('./db');

db('mongodb+srv://user:user1234@cluster0-luiv4.mongodb.net/telegromdb?retryWrites=true&w=majority');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use('/app', express.static('public'));
server.listen(3000, function (){
    console.log('La aplicación está escuchando en http://localhost:3000');
});


