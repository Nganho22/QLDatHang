const TaiXe = require('../models/TaiXe.model')
const { sql, poolPromise } = require('../database/mssql.database')

const { mongooseToObject } = require('../util/mongoose')
const { multiMongooseToObject } = require('../util/mongoose')
const { json } = require('express')

class TaiXeControllers {
    me(req, res) {
        res.render('taixe')
    }

    async Xem_DS_TaiXe(req, res) {
        try {
            //const pool = await poolPromise;
            const TaiXes = await TaiXe.Xem_DS_TaiXe()
            return res
                .json(TaiXes)
        } catch (err) {
            console.error(err);
        }
    };

    async TimKiemDonHangTheoQuan(req, res) {
        try {
            //const pool = await poolPromise;
            const dh = await TaiXe.TimKiemDonHangTheoQuan(1)
            return res
                .json(dh)
        } catch (err) {
            console.error(err);
        }
    };

}

module.exports = new TaiXeControllers();