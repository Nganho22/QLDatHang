
const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
//const { NVarChar, Char, VarChar } = require('mssql')
const Schema = mongoose.Schema
mongoose.plugin(slug)

const Adminqly = new Schema({
    MaAdmin: { type: Number },
    CMND: { type: String },
    SoDienThoai: { type: String },
    Email: { type: String },
    SoNha: { type: String },
    Duong: { type: String },
    Quan: { type: String },
    Thanhpho: { type: String }

})


module.exports = mongoose.model('Adminqly', Adminqly)