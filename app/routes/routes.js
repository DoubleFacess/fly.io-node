    module.exports = app => {

    const main = require("../controllers/controller.js")
    const router = require("express").Router()

    router.get('/test', main.test)  
    router.get('/test-db', main.test_sql)
    /*
    router.get("/find/:id", _app.find)
    */
    
    app.use('/api/', router)
}