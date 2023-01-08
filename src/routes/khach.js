const express = require('express')
const router = express.Router()

const KhachController = require('../app/controllers/KhachController')

router.get('/', KhachController.me)
router.get('/kh', KhachController.Xem_DS_KhachHang)

module.exports = router