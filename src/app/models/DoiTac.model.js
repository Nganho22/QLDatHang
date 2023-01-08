const { sql, poolPromise } = require('../database/mssql.database')
//const bcrypt = require('bcryptjs');

let Xem_DS_DoiTac = async () => {
  const pool = await poolPromise;
  const DoiTacs = await pool.query("select * from DoiTac");
  return DoiTacs
}

module.exports = {
  Xem_DS_DoiTac
}