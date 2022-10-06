const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class NoteController {
  async create(req, res) {
    const { title, description, rating } = req.body
    const { id } = req.params
    const database = await sqliteConnection()


    if (rating >5 || rating < 1 ) {
      throw new AppError("nota do filme pode variar de 1 até o 5")
    }

    await database.run("INSERT INTO notes (title, description, rating, user_id) VALUES (?,?,?,?)", [title, description, rating, id])
    

    return res.json()

  }

  async update(req, res){ 
     const { title, description, rating } = req.body
     const {id} = req.params

    //  const IdNotes = ("SELECT * FROM notes WHERE id= (?) ", id)
     const database = await sqliteConnection()



     await database.run(`
     UPDATE notes SET 
     title = ?, 
     description = ?, 
     rating = ?,
     updated_at = DATETIME ('now')
     WHERE id = ?
     `, [title, description, rating, id]) 

    return res.json()
  }

}

module.exports = NoteController