const express = require('express')
const router = express.Router()
const watchCtrl = require('../controllers/watchController')

router
    .get('/getWatches', watchCtrl.getWatches)

module.exports = router;
