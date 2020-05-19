const express = require('express')
const router = express.Router()
const ticketCtrl = require('../controllers/ticketController')

console.log(ticketCtrl)
router.get('/getTickets', ticketCtrl.index)