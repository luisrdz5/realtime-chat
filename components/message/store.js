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
async function getMessages(filterUser){
    let filter = {};
    if(filterUser!==null){
        filter = { user: filterUser};
    }
    const messages = await Model.find(filter);
    return messages;
}
async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id: id
    }); 
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}
async function removeMessage(id){
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
}