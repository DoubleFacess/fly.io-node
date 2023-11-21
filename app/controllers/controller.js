const Model = require("../models/model.js")

exports.test = (req, res) => {
  res.json({ message: "Test api: test successfull!" })
}

exports.test_sql = (req, res) => {

  const nome = req.query.nome
  const cognome = req.query.cognome
  const email = req.query.email  

  Model._test(nome, (err, data) => {
    if (err)
      res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving tutorials."
    })
    else res.send(data)
  })
}


