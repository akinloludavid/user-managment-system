const express = require('express')
const route = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')


/**
 * @description root route
 * GET /
 */
route.get('/', services.home)


/**
 * @description ADD-USER route
 * GET /add-user
 */
route.get('/add-user', services.add_user)


/**
 * @description UPDATE route
 * GET /update-user
 */
route.get('/update-user', services.update_user)



//API

route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.get('/api/users/:id', controller.getOne)
route.put('/api/users/:id', controller.update)
route.delete('/api/users:/id', controller.delete)

module.exports = route