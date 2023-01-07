var AdminQLy = require('../models/AdminQLy.model')
const { sql, poolPromise } = require('../database/mssql.database')

const { mongooseToObject } = require('../util/mongoose')
const { multiMongooseToObject } = require('../util/mongoose')
const { json } = require('express')


class SiteControllers {
    home(req, res) {
        res.render('home')
    }


    async queryExample1(req, res) {
        try {
            const pool = await poolPromise;
            const result = await pool.query("select * from AdminQly");
            console.log(result.recordset)
            return res
                .json({result})
        } catch (err) {
            console.error(err);
        }
    };

}

module.exports = new SiteControllers();