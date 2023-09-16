const db = require('./db')

class Model {
  constructor (type) {
    this._modelType = type
  }

  add (instance) {
    return db.addToDatabase(this._modelType, instance)
  }

  list () {
    return db.getAllFromDatabase(this._modelType)
  }

  retrieve (id) {
    return db.getFromDatabaseById(this._modelType, id)
  }

  update (id, instance) {
    return db.updateInstanceInDatabase(this._modelType, {
      ...instance,
      id,
    })
  }

  delete (id) {
    return db.deleteFromDatabasebyId(this._modelType, id)
  }
}

module.exports = Model
