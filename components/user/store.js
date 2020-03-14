const Model = require('./model');

function addUser(user) {
    const myUser = new Model(user);
    myUser.save();
}
async function getUsers(filterUser){
    let filter = {};
    if(filterUser!==null){
        filter = { user: filterUser};
    }
    const users = await Model.find(filter);
    return users;
}
async function updateText(id, user){
    const foundUser = await Model.findOne({
        _id: id
    }); 
    foundUser.user = user;
    const newUser = await foundUser.save();
    return newUser;
}
async function removeUser(id){
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addUser,
    list: getUsers,
    updateText: updateText,
    remove: removeUser,
}