const db = require("./db.js")

// constructor
const Model = function(object) {
    this.nome = object.nome
    this.cognome = object.cognome
    this.email = object.email
}



Model._test = (app, result) => {
    const query = 'SELECT * FROM test'
    
    db.connect()
        .then(() => db.query(query))
        .then((res) => {
            console.log('Contacts:', res.rows)
            result(null, res.rows)
        })
        .catch((err) => {
            console.error('Error during SELECT from contatti_main', err)
            result(err, null)
        })
        .finally(() => db.end())
}

//db.disconnect()

module.exports = Model

