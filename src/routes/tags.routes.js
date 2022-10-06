const { Router } = require('express')

const TagController = require('../controllers/TagController')

const tagsRouters = Router()

const tagsController = new TagController()

tagsRouters.post("/:id" , tagsController.create)

module.exports = tagsRouters