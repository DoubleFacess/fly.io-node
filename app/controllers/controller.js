const model = require("../models/model.js")

/*
exports.view = (req, res) => {
  const nome = req.query.nome_completo      
  App.view(nome, (err, data) => {
    if (err)
      res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving tutorials."
    })
    else res.send(data)
  })
}
*/
exports.test = (req, res) => {
  res.json({ message: "Welcome to enzonav application." })
}


