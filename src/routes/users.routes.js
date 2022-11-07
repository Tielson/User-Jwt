const { Router } = require('express')

const UsersController = require('../controllers/UserController')

const usersRouters = Router()

const usersController = new UsersController()

usersRouters.post("/" , usersController.create)
usersRouters.put("/:id" , usersController.update)
usersRouters.post("/check" , usersController.verify)


module.exports = usersRouters