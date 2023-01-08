const express = require('express')
const router = express.Router()

const DoiTacController = require('../app/controllers/DoiTacController')

router.get('/', DoiTacController.me)
router.get('/dt', DoiTacController.Xem_DS_DoiTac)

module.exports = router