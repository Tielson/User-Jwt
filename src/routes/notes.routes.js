const { Router } = require('express')

const NoteController = require('../controllers/NoteController')

const notesRouters = Router()

const notesController = new NoteController()

notesRouters.post("/:id" , notesController.create)
notesRouters.put("/:id" , notesController.update)

module.exports = notesRouters