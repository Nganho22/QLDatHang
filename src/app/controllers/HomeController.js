const { sql, poolPromise } = require('../database/mssql.database')

const { mongooseToObject } = require('../util/mongoose')
const { multiMongooseToObject } = require('../util/mongoose')
const { json } = require('express')


class HomeControllers {

    Login(req, res) {
        res.render('login')
    }

    home(req, res, next)
    {
        res.render('home')
    }



}

module.exports = new HomeControllers();