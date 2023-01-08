const express = require('express')
const router = express.Router()

const SiteController = require('../app/controllers/SiteController')

router.get('/', SiteController.me)
router.get('/ad', SiteController.Xem_Ad)
router.get('/nv', SiteController.Xem_NV)
router.get('/dsmon', SiteController.XemMon)

module.exports = router
