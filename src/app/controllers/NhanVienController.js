const NhanVien = require('../models/NhanVien.model')
const { sql, poolPromise } = require('../database/mssql.database')

const { mongooseToObject } = require('../util/mongoose')
const { multiMongooseToObject } = require('../util/mongoose')
const { json } = require('express')

class NhanVienControllers {

    nv(req, res) {
        res.render('nhanvien')
    }
    async Xem_HD(req, res) {
        try {
            //const pool = await poolPromise;
            const NhanViens = await NhanVien.XemHD('38')
            return res
                .json(NhanViens.recordset)
        } catch (err) {
            console.error(err);
        }
    };

    async Xem_DS_DT_Dang_QL(req, res) {
        try {
            const nv = await NhanVien.XemDT1('8900')
            return res
                .json(nv.recordset)
        } catch (err) {
            console.error(err);
        }
    };

    async Xem_DS_DT_Moi(req, res) {
        try {
            const nv = await NhanVien.XemDT2()
            return res
                .json(nv)
        } catch (err) {
            console.error(err);
        }
    };

    async Xem_DS_DT_Dang_QL_hetHan(req, res) {
        try {
            const nv = await NhanVien.XemDT3('6323')
            return res
                .json(nv.recordset)
        } catch (err) {
            console.error(err);
        }
    };
}

module.exports = new NhanVienControllers();