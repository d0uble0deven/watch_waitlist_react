const express = require('express')
const router = express.Router()
const ticketCtrl = require('../controllers/ticketController')

router
    .get('/getTickets', ticketCtrl.getTickets)
    .post('/add/addTickets', ticketCtrl.addTicket)
    .delete('/deleteTicket/:id', ticketCtrl.deleteTicket)
    .put('/updateFulfillment', ticketCtrl.updateFulfillment)
// .get('/show/:d', ticketCtrl.showTicket)

module.exports = router;