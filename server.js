const express = require('express')
const cors = require("cors")
const fs = require('node:fs')

/*
var corsOptions = {
  origin: "http://localhost:3000"
}
app.use(cors(corsOptions))
*/

const app = express() // set up express web server

app.use(express.json()) // parse requests of content-type - application/json /* bodyParser.json() is deprecated */

app.use(express.urlencoded({ extended: true })) // parse requests of content-type - application/x-www-form-urlencoded /* bodyParser.urlencoded() is deprecated */


app.get("/", (req, res) => { // welcome message
  res.json({ message: "Welcome to enzonav application." })
})

require("./app/routes/routes.js")(app)

// set port, listen for requests
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
