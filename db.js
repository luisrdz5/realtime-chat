const db = require('mongoose');

async function connect(url) {
    db.promise = global.promise;
    db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('[db] Conectado con éxito');
}

module.exports = connect;