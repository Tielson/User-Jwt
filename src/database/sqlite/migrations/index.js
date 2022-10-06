const sqliteConnection = require('../../sqlite')
const createUsers = require('./createUser')
const createNotes = require('./createNotes')
const createTags = require('./createTags')

async function migrationsRun() {
  const schemas = [
    createNotes,
    createTags,
    createUsers,
  ].join(';');

  sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error));
}

module.exports = migrationsRun