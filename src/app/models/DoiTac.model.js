const { sql, poolPromise } = require("../database/mssql.database");
//const bcrypt = require('bcryptjs');

let Xem_DS_DoiTac = async () => {
  const pool = await poolPromise;
  const DoiTacs = await pool.query("select * from DoiTac");
  return DoiTacs;
};

let Cap_Nhat_Thong_Tin_Cua_Hang = async (madoitac, tinhtrang) => {
  const pool = await poolPromise;

  let values = [];
  values.push(madonhang);
  values.push(tinhtrang);
  let sql = "EXEC CAP_NHAP_CUA_HANG " + values[0] + "," + values[1];
  const ch = await pool.query(sql);
  //console.log("EXEC DanhSachMonAnTrongDon " + values)
  //console.log(nv)
  return ch;
};

let Xem_DS_Don_Hang_Dang_Che_Bien = async (madoitac) => {
  const pool = await poolPromise;

  let values = [];
  values.push(madoitac);
  values.push("Đang chế biến");
  let sql =
    "SELECT * FROM DonDatHang WHERE " +
    values[0] +
    "= MaDoiTac AND TinhTrang=" +
    values[1];
  const ds = await pool.query(sql);
  //console.log("EXEC DanhSachMonAnTrongDon " + values)
  //console.log(nv)
  return ds;
};

module.exports = {
  Xem_DS_DoiTac,
  Cap_Nhat_Thong_Tin_Cua_Hang,
  Xem_DS_Don_Hang_Dang_Che_Bien,
};
