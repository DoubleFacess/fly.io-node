const express = require('express')
const cors = require("cors")
const fs = require('node:fs')

// set up express web server
const app = express()

var corsOptions = {
  origin: "http://localhost:3000"
}

app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(express.json()) /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })) /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to enzonav application." })
})
//require("./app/routes/_app.routes.js")(app)




// @@ Main page * old code to serve html page with access counter @@ */
// set up static content
app.use(express.static('public'))
// last known count
let count = 0
app.get('/test', async(_request, response) => {
  // increment counter in counter.txt file
  try {
    count = parseInt(fs.readFileSync('counter.txt', 'utf-8')) + 1
  } catch {
    count = 1
  }
  fs.writeFileSync('counter.txt', count.toString())

  // render HTML response
  try {
    const content = fs.readFileSync('views/index.tmpl', 'utf-8')
      .replace('@@COUNT@@', count.toString())
    response.set('Content-Type', 'text/html')
    response.send(content)
  } catch (error) {
    response.send()
  }
})
/* @@ end of code @@ */




// Start web server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
// set port, listen for requests
const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
