const KhachHangDat = require("../models/KhachHangDat.model");

const { sql, poolPromise } = require("../database/mssql.database");

const { mongooseToObject } = require("../util/mongoose");
const { multiMongooseToObject } = require("../util/mongoose");
const { json } = require("express");

class SiteControllers {
  home(req, res) {
    res.render("home");
  }

  async XemDanhSachKhachHang(req, res) {
    try {
      const pool = await poolPromise;
      const KhachHangDats = await pool.query("select * from KhachHangDat");
      console.log(KhachHangDats);
      return (
        res
          //.json({result})
          .json(KhachHangDats.recordset)
      );
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new SiteControllers();
