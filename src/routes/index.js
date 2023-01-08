const {sql , poolPromise} = require("../app/database/mssql.database")
const SiteController = require('./site')
const HomeController = require('./home')


function route(app){
    app.use('/', HomeController)
    app.use('/AD', SiteController)
}


module.exports = route