    module.exports = app => {

    const main = require("../controllers/controller.js")
    const router = require("express").Router()

    router.get('/test', main.test)    
    /*
    router.get("/find/:id", _app.find)
    */
    
    app.use('/api/', router)
}