const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function (req, res){
    const filterUsers = req.query.user || null;
    controller.getUsers(filterUsers)
        .then((userList) => {
            response.success(req, res, userList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500 , e)
        })
});

router.post('/', function (req,res) {
    controller.addUser(req.body.name)
    .then((fullUser) => {
        response.success(req, res, fullUser, 201);
    })
    .catch(() => {
        response.error(req, res, 'información invalida', 400, 'Error en el controlador');
    })

});
router.patch('/:id', function (req, res) {
    console.log(req.params.id);
    controller.updateUser(req.params.id, req.body.user)
    .then((data) => {
        response.success(req,res, data, 200);
    })
    .catch(e=> {
        response.error(req, res, 'Error interno', 500, e);
    });
    res.send('ok');
})
router.delete('/:id', function (req, res) {
    console.log(req.params.id);
    controller.deleteUser(req.params.id)
    .then(() => {
        response.success(req, res, `Mensaje  ${req.params.id} eliminado`, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e);
    })
})

module.exports = router;


