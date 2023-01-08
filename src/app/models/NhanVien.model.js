const { sql, poolPromise } = require('../database/mssql.database')
//const bcrypt = require('bcryptjs');

let XemHD = async (madt) => {
    const pool = await poolPromise;

    let values =[]
    values.push(madt)
    let sql = "EXEC XemHD " + values
    const nv = await pool.query(sql);
    return nv
}

let XemDT1 = async (manv) => {
    const pool = await poolPromise;

    let values =[]
    values.push(manv)
    let sql = "EXEC Xem_DS_DT_Dang_QL " + values
    const nv = await pool.query(sql);
    return nv
}

let XemDT2 = async () => {
    const pool = await poolPromise;
    const NhanViens = await pool.query("EXEC Xem_DS_DT_Moi");
    return NhanViens
}

let XemDT3 = async (manv) => {
    const pool = await poolPromise;

    let values =[]
    values.push(manv)
    let sql = "EXEC Xem_DS_DT_Dang_QL_hetHan " + values
    const nv = await pool.query(sql);
    return nv
}

module.exports = {
    XemHD,
    XemDT1,
    XemDT2, 
    XemDT3
}