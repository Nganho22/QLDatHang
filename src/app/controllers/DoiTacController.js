const DoiTac = require('../models/DoiTac.model')
const { sql, poolPromise } = require('../database/mssql.database')

const { mongooseToObject } = require('../util/mongoose')
const { multiMongooseToObject } = require('../util/mongoose')
const { json } = require('express')

class DoiTacControllers {
    me(req, res) {
        res.render('doitac')
    }

    async Xem_DS_DoiTac(req, res) {
        try {
            //const pool = await poolPromise;
            const DoiTacs = await DoiTac.Xem_DS_DoiTac()
            return res
                .json(DoiTacs)
        } catch (err) {
            console.error(err);
        }
    };

}

module.exports = new DoiTacControllers();