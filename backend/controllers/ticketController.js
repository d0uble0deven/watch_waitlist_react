const Ticket = require('../Data/TicketModel')

module.exports = {
    getTickets,
    addTicket,
    updateFulfillment,
    deleteTicket,

}


function getTickets(req, res) {
    Ticket.find((err, data) => {
        let sortedData = data.sort((a, b) => a.date_ordered - b.date_ordered)
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: sortedData })
    })
}

function addTicket(req, res) {
    let ticket = new Ticket()

    const { inputFirstName, inputLastName, inputStreet, inputCity, inputState, inputZipCode, inputNumber, inputEmail, inputDateOrdered, inputWatchOrdered, inputEmployeeResponsible } = req.body.input
    console.log('inputFirstName: ' + inputFirstName)

    ticket.first_name = inputFirstName
    ticket.last_name = inputLastName
    ticket.street = inputStreet
    ticket.city = inputCity
    ticket.state = inputState
    ticket.zip_code = inputZipCode
    ticket.phone_number = inputNumber
    ticket.email = inputEmail
    ticket.employee_responsible = inputEmployeeResponsible
    ticket.date_ordered = inputDateOrdered
    ticket.watch_ordered = inputWatchOrdered
    ticket.date_fulfilled = ''
    ticket.fulfilled = false

    ticket.save(err => {
        if (err) return res.json({ success: false, error: err })
        return res.json({ success: true })
    })
}

async function updateFulfillment(req, res) {
    id = req.body.statusUpdate.id
    status = req.body.statusUpdate.status
    let date = Date.now()
    console.log('id: ' + id)
    console.log('status: ' + status)
    console.log('typeof date: ' + typeof (date))
    console.log('date: ' + date)
    try {
        await Ticket.update({ _id: id }, { $set: { fulfilled: status, date_fulfilled: date } })
    }
    catch (error) {
        console.error(error)
    }
}

function deleteTicket(req, res) {

    // get id from req.body, find document by id, delete it, return
    console.log('deleteCTRl is working: ' + req.body)
    // const { id } = req.body


    // Ticket.findByIdAndRemove(id, (err) => {
    //     if (err) return res.send(err)
    //     return res.json({ success: true })
    // }
    // )
}