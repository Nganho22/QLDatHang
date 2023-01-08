const express = require("express");
const router = express.Router();

const DoiTacController = require("../app/controllers/DoiTacController");

router.get("/", DoiTacController.me);
router.get("/dt", DoiTacController.Xem_DS_DoiTac);
router.get("/capnhatcuahang", DoiTacController.Cap_Nhat_Cua_Hang);
router.get("/xemdsdonhangdangchebien", DoiTacController.Xem_DS_Don_Hang_Dang_Che_Bien);

module.exports = router;
