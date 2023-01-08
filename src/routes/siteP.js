const express = require('express')
const router = express.Router()

const SiteController = require('../app/controllers/SiteController')


router.get('/', SiteController.home)
router.get('/hi', SiteController.queryExample1)
module.exports = router