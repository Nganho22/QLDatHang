const { sql, poolPromise } = require('../database/mssql.database')

let logincheck = async (tentaikhoan, matkhau) => {
    const pool = await poolPromise;
    let sql = "EXEC LogIn_All '" +tentaikhoan + "', '" + matkhau + "'"
    console.log(sql)
    const nv = await pool.query(sql);
    //console.log("EXEC DanhSachMonAnTrongDon " + values)
    console.log(nv)
    return nv
}


module.exports = {
    logincheck,
}