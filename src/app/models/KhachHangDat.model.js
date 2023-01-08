const { sql, poolPromise } = require('../database/mssql.database')
//const bcrypt = require('bcryptjs');

let Xem_DS_KhachHang = async () => {
  const pool = await poolPromise;
  const KhachHangDats = await pool.query("select * from KhachHangDat");
  return KhachHangDats
}


module.exports = {
  Xem_DS_KhachHang
}