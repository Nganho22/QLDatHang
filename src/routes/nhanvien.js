const express = require('express')
const router = express.Router()

const NhanVienController = require('../app/controllers/NhanVienController')

router.get('/', NhanVienController.nv)
router.get('/hd', NhanVienController.Xem_HD)
router.get('/dt1', NhanVienController.Xem_DS_DT_Dang_QL)
router.get('/dt2', NhanVienController.Xem_DS_DT_Moi)
router.get('/dt3', NhanVienController.Xem_DS_DT_Dang_QL_hetHan)

module.exports = router