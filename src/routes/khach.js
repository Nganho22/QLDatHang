const express = require('express')
const router = express.Router()

const KhachController = require('../app/controllers/KhachController')

router.get('/', KhachController.kh)
router.get('/dsdh', KhachController.Xem_DSDon)
router.get('/ctdh', KhachController.Xem_CTDH)

module.exports = router