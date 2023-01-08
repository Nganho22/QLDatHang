const {sql , poolPromise} = require("../app/database/mssql.database")
const SiteController = require('./site')

function route(app){
    app.use('/', SiteController)
}


module.exports = route