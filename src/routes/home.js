const express = require('express')
const router = express.Router()

const HomeController = require('../app/controllers/HomeController')

router.get('/', HomeController.Login)
router.post('/', HomeController.Login)
router.get('/signup', HomeController.Login)
router.post('/signup', HomeController.Login)

module.exports = router
