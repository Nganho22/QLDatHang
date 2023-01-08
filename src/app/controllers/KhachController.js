const KhachHangDat = require('../models/KhachHangDat.model')
const { sql, poolPromise } = require('../database/mssql.database')

const { mongooseToObject } = require('../util/mongoose')
const { multiMongooseToObject } = require('../util/mongoose')
const { json } = require('express')

class KhachControllers {
    me(req, res) {
        res.render('khach')
    }

    async Xem_DS_KhachHang(req, res) {
        try {
            //const pool = await poolPromise;
            const KhachHangDats = await KhachHangDat.Xem_DS_KhachHang()
            return res
                .json(KhachHangDats)
        } catch (err) {
            console.error(err);
        }
    };

}

module.exports = new KhachControllers();