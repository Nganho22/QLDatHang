const express = require("express");
const router = express.Router();

const TaiXeController = require("../app/controllers/TaiXeController");

router.get("/", TaiXeController.me);
router.get("/tx", TaiXeController.Xem_DS_TaiXe);
router.get("/timkiemdonhangtheoquan", TaiXeController.TimKiemDonHangTheoQuan);

module.exports = router;
