const { sql, poolPromise } = require('../database/mssql.database')
const publics = require('../models/Public.model')
const { mongooseToObject } = require('../util/mongoose')
const { multiMongooseToObject } = require('../util/mongoose')
const { json } = require('express')


class HomeControllers {

    Login(req, res) {
        res.render('login')
    }

    Signup(req, res) {
        res.render('signup')
    }

    async Logincheck(req, res) {
        try{
        const a = await publics.logincheck('Claire Sanford', 'DGSC29')
        console.log(a) 
        res.render('home')
        }
        catch (err) {
            res.render('login')
          }
    }

    Signupcheck(req, res) {
        res.render('signup')
    }

    home(req, res, next)
    {
        res.render('home')
    }



}

module.exports = new HomeControllers();