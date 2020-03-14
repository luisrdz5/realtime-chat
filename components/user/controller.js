const store = require('./store');

function addUser(name){
    return new Promise((resolve, reject) => {
        if(!name){
            console.error('[UserController] No existe el usuario ');
            reject('Los datos son incorrectos');
            return false;
        }
        const fullUser = {
            name,
        }
        store.add(fullUser);
        resolve(fullUser);
    })
}
function getUsers(filterUser){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}
function updateUser(id, user){
    return new Promise(async (resolve, reject) => {
        if (!id || !user) {
            reject('Invalid data');
            return false;
        }
        const result = await store.updateText(id, user);
        console.log(result);
        resolve(result);
    })
}
function deleteUser(id){
    return new Promise(async (resolve, reject) => {
        if(!id){
            reject('Id invalido');
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    })
}

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
}