const db = require('mongoose');
const Model = require('./model');

db.promise = global.promise;
db.connect('mongodb+srv://user:user1234@cluster0-luiv4.mongodb.net/telegromdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log('[db] Conectado con éxito');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}
async function getMessages(){
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    //update
    //delete
}