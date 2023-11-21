const express = require('express')
const cors = require("cors")
const fs = require('node:fs')
const { Client } = require('pg')
const dbConfig = require('./app/config/db.config.js')




const client = new Client({ // Crea un cliente PostgreSQL
  connectionString: dbConfig.DATABASE_URL,
})

const app = express() // set up express web server

app.use(express.json()) // parse requests of content-type - application/json /* bodyParser.json() is deprecated */

app.use(express.urlencoded({ extended: true })) // parse requests of content-type - application/x-www-form-urlencoded /* bodyParser.urlencoded() is deprecated */

require("./app/routes/routes.js")(app)

/*
var corsOptions = {
  origin: "http://localhost:3000"
}
app.use(cors(corsOptions))
*/

app.get("/", (req, res) => { // simple route || welcome message
  res.json({ message: "Welcome to enzonav application." })
})

// set port, listen for requests
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
