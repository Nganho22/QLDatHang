const DoiTac = require("../models/DoiTac.model");
const { sql, poolPromise } = require("../database/mssql.database");

const { mongooseToObject } = require("../util/mongoose");
const { multiMongooseToObject } = require("../util/mongoose");
const { json } = require("express");

class DoiTacControllers {
  me(req, res) {
    res.render("doitac");
  }

  async Xem_DS_DoiTac(req, res) {
    try {
      //const pool = await poolPromise;
      const DoiTacs = await DoiTac.Xem_DS_DoiTac();
      return res.json(DoiTacs);
    } catch (err) {
      console.error(err);
    }
  }

  async Cap_Nhat_Cua_Hang(req, res) {
    try {
      //const pool = await poolPromise;
      const ch = await DoiTac.XemDSMOn("1", "Mở cửa");
      return res.json(ch);
    } catch (err) {
      console.error(err);
    }
  }

  async Xem_DS_Don_Hang_Dang_Che_Bien(req, res) {
    try {
      //const pool = await poolPromise;
      const ds = await DoiTac.Xem_DS_Don_Hang_Dang_Che_Bien("1");
      return res.json(ds);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new DoiTacControllers();
