const Adminqly = require('../models/AdminQLy.model')
const { sql, poolPromise } = require('../database/mssql.database')

const { mongooseToObject } = require('../util/mongoose')
const { multiMongooseToObject } = require('../util/mongoose')
const { json } = require('express')


class SiteControllers {
    me(req, res) {
        res.render('Admin')
    }

    async Xem_Ad(req, res) {
        try {
            //const pool = await poolPromise;
            const Adminqlys = await Adminqly.XemAdmin()
            const kq =[]
            for(const t of Adminqlys.recordset)
            {
                kq.push(t)
            }
            console.log(Adminqlys.recordset)
            res
                .json({kq: kq})
        } catch (err) {
            console.error(err);
        }
    };

    async Xem_NV(req, res) {
        try {
            //const pool = await poolPromise;
            const nv = await Adminqly.XemNV()
            return res
                .json(nv)
        } catch (err) {
            console.error(err);
        }
    };

    async XemMon(req, res) {
        try {
            //const pool = await poolPromise;
            const nv = await Adminqly.XemDSMOn('123')
            return res
                .json(nv)
        } catch (err) {
            console.error(err);
        }
    };

}

module.exports = new SiteControllers();