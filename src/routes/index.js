const { sql, poolPromise } = require("../app/database/mssql.database")
const SiteController = require('./site')
const HomeController = require('./home')
const KhachController = require('./khach')
const DoiTacController = require('./doitac')
const NhanVienController = require('./nhanvien')
const TaiXeController = require('./taixe')

function route(app) {

    app.use('/AD', SiteController)
    app.use('/khach', KhachController)
    app.use('/doitac', DoiTacController)
    app.use('/nhanvien', NhanVienController)
    app.use('/taixe', TaiXeController)
    app.use('/', HomeController)
}

module.exports = route