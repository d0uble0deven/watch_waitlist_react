const express = require('express')
const router = express.Router()
const ticketCtrl = require('../controllers/ticketController')

router.get('/getTickets', ticketCtrl.index)

module.exports = router;