const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
//const { NVarChar, Char, VarChar } = require('mssql')
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const DoiTac = new Schema({
  MaDoiTac: { type: Number },
  NguoiDaiDien: { type: String },
  SoDienThoai: { type: String },
  Email: { type: String },
  SoNha: { type: String },
  Duong: { type: String },
  Thanhpho: { type: String },
  NgayCapNhat: { type: String },
  MaQuan: { type: String },
});

module.exports = mongoose.model("DoiTac", DoiTac);
