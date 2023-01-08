const { sql, poolPromise } = require("../database/mssql.database");
//const bcrypt = require('bcryptjs');

let Xem_DS_TaiXe = async () => {
  const pool = await poolPromise;
  const TaiXes = await pool.query("select * from TaiXe");
  return TaiXes;
};

module.exports = {
  Xem_DS_TaiXe
};
