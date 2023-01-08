const { sql, poolPromise } = require("../database/mssql.database");
//const bcrypt = require('bcryptjs');

let Xem_DS_TaiXe = async () => {
  const pool = await poolPromise;
  const TaiXes = await pool.query("select * from TaiXe");
  return TaiXes;
};

let TimKiemDonHangTheoQuan = async (maquan) => {
  const pool = await poolPromise;
  let values =[]
  values.push(maquan)
  const dh = await pool.query("select * from DonDatHang where MaQuan="+value[0]);
  return dh;
};

module.exports = {
  Xem_DS_TaiXe,
  TimKiemDonHangTheoQuan
};
