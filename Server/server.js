const express = require('express')

const routes = require('./routes/home')

const server = express()

server.use(express.static('public'))

server.use('/', routes)

module.exports = server
