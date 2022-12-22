const { request } = require('express');
var sql = require('mssql')


/*const sqlConfig = {
  user: 'sa',
  password: '123456',
  database: 'QLyDatHang',
  server: 'ABC1',
  options: {
    enableArithAbort: true,
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
}


async function KK(){
    try {
        // make sure that any items are correctly URL encoded in the connection string
        //await sql.connect('Server= ABC1;Database=QLyDatHang;User Id=sa;Password=123456;Encrypt=true')
        await sql.connect(sqlConfig)
        var connection = new Connection(config);  
        connection.on('connect', function(err) {  
            // If no error, then good to proceed.
            console.log("Connected");  
            const result = sql.query`select * from LoaiMonAn`
            console.log(result)
            sql.close()
        });

    } catch (err) {
        console.log("err")
        sql.close()
    }
}

KK()
*/
var con = sql.connect({
  host: "ABC1",
  user: "sa",
  password: "123456",
  database: "QLyDatHang"
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM LoaiMonAn", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
