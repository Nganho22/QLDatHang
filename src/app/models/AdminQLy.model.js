const { sql, poolPromise } = require('../database/mssql.database')
//const bcrypt = require('bcryptjs');

let XemAdmin = async () => {
    const pool = await poolPromise;
    const Adminqlys = await pool.query("EXEC Xem_Ds_Ad");
    return Adminqlys
}

let XemNV = async () => {
    const pool = await poolPromise;
    const nv = await pool.query("EXEC Xem_Ds_Nv");
    return nv
}

let XemDSMOn = async (madonhang) => {
    const pool = await poolPromise;

    let values = []
    values.push(madonhang)
    let sql = "EXEC DanhSachMonAnTrongDon " + values
    const nv = await pool.query(sql);
    //console.log("EXEC DanhSachMonAnTrongDon " + values)
    //console.log(nv)
    return nv
}

module.exports = {
    XemAdmin,
    XemNV,
    XemDSMOn,
}