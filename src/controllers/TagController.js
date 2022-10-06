const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class TagController {

  async create(req, res){
    const {notes_id, name} = req.body
    const {id} = req.params
    const database = await sqliteConnection()

    await database.run(`
    INSERT INTO tags 
    (note_id, user_id, name)
    VALUES (?, ?, ?)
    `, [notes_id, id, name])
    return res.json()
  }
}

module.exports = TagController