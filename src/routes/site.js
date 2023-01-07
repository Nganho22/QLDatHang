const express = require('express')
const router = express.Router()
const { sql, poolPromise } = require("../app/database/mssql.database")

const SiteController = require('../app/controllers/SiteController')


router.get('/', SiteController.home)
router.get('/hi', SiteController.show)
module.exports = router