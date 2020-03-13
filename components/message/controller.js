function addMessage(user, message){
    return new Promise((resolve, reject) => {
        if(!user||!message){
            console.error('[MessageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        }
        const fullMessage = {
            user,
            message,
            date: new Date(),
        }
        console.log(fullMessage);
        resolve(fullMessage);
    })
}

module.exports = {
    addMessage,
}