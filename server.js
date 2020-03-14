const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const db = require('./db');

db('mongodb+srv://user:user1234@cluster0-luiv4.mongodb.net/telegromdb?retryWrites=true&w=majority');


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

router(app);

app.use('/app', express.static('public'));
app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');

