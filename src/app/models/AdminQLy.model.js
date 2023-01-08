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

module.exports = {
    XemAdmin,
    XemNV,
}