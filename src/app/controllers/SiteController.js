//const Adminqly = require('../models/AdminQLy.model')
const { sql, poolPromise } = require('../database/mssql.database')

const { mongooseToObject } = require('../util/mongoose')
const { multiMongooseToObject } = require('../util/mongoose')
const { json } = require('express')


class SiteControllers {

    login(req, res, next){
        try{

        } catch(err){
            console.error(err)
        }
    }
    home(req, res) {
        res.render('home')
    }

    me(req, res) {
        res.render('Admin')
    }


    async queryExample1(req, res) {
        try {
            const pool = await poolPromise;
            const Adminqlys = await pool.query("select * from AdminQly");
            console.log(Adminqlys)
            return res
                //.json({result})
                .json(Adminqlys.recordset)
        } catch (err) {
            console.error(err);
        }
    };

}

module.exports = new SiteControllers();