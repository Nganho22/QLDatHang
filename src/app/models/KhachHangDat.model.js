const { sql, poolPromise } = require('../database/mssql.database')
//const bcrypt = require('bcryptjs');

let XemDSDon = async (MaKH) => {
    const pool = await poolPromise;

    let values =[]
    values.push(MaKH)
    let sql = "EXEC Search_All " + values
    const kh = await pool.query(sql);
    return kh
}

let XemCTDH = async (MaDH, MaKH) => {
    const pool = await poolPromise;

    let values1 =[]
    let values2 =[]
    values.push(MaDH, MaKH)
    let sql = "EXEC CTDH " + values1 + values2
    const kh = await pool.query(sql);
    return kh
}

module.exports = {
    XemDSDon,
    XemCTDH
}