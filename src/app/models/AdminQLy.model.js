const { sql, poolPromise } = require('../database/mssql.database')
//const bcrypt = require('bcryptjs');

let XemAdmin = async () => {
    const pool = await poolPromise;
    const Adminqlys = await pool.query("select * from AdminQly");
    return Adminqlys
}


module.exports = {
    XemAdmin
}