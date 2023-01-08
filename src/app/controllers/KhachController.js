const Khach = require('../models/KhachHangDat.model')
const { sql, poolPromise } = require('../database/mssql.database')

const { mongooseToObject } = require('../util/mongoose')
const { multiMongooseToObject } = require('../util/mongoose')
const { json } = require('express')

class KhachControllers {
    kh(req, res) {
        res.render('khach')
    }

    async Xem_DSDon(req, res) {
        try {
            const Khachs = await Khach.XemDSDon('1534')
            return res
                .json(Khachs.recordset)
        } catch (err) {
            console.error(err);
        }
    };

    async Xem_CTDH(req, res) {
        try {
            const kh = await Khach.XemCTDH('10', '1240')
            return res
                .json(kh.recordset)
        } catch (err) {
            console.error(err);
        }
    };
}

module.exports = new KhachControllers();
