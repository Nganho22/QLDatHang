const express = require('express')
const router = express.Router()

const HomeController = require('../app/controllers/HomeController')

router.get('/', HomeController.Login)
router.post('/', HomeController.Logincheck)
router.get('/signup', HomeController.Signup)
router.post('/signup', HomeController.Signupcheck)

module.exports = router
