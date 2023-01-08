const express = require('express')
const router = express.Router()

const HomeController = require('../app/controllers/HomeController')

router.get('/', HomeController.Login)
router.post('/', HomeController.Login)
module.exports = router
