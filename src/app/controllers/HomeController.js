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
        try {
            const tk = req.body.uname
            const mk = req.body.psw
            const t = 0
            //console.log(mk)
            //const a = await publics.logincheck('Claire Sanford', 'DGSC29')
            const nv = await publics.logincheck(tk, mk)
            if (!nv.recordset)
                res.render('login')
            if (nv.recordset) {
                const kq = []
                for (const t of nv.recordset) {
                    kq.push(t)
                }
                res.json(kq)
            }

        } catch (err) {
            res.render('login')
        }
    }


    Signupcheck(req, res) {
        res.render('signup')
    }

    home(req, res, next) {
        res.render('home')
    }



}

module.exports = new HomeControllers();