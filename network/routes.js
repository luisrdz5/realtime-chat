const express = require('express');
const message = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');

const routes = function (server) {
    server.use('/chat', chat )
    server.use('/message', message )
    server.use('/user', user )
}

module.exports = routes;