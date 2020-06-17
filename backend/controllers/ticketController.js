const Ticket = require('../Data/TicketModel')

module.exports = {
    getTickets,
    addTicket,
    // deleteTicket,
    updateFulfillment,
    // updatePendingFulfillment,
    // updateFulfilledFulfillment,
    // showTicket,
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




// async function updatePendingFulfillment(req, res) {
//     console.log('updatePendingFulfillment is firing')
//     console.log('req. ' + Object.keys(req.params))
//     id = req.body.id
//     try {
//         await Ticket.update({ _id: req.body.id }, { $set: { fulfilled: false, date_fulfilled: null } })
//     }
//     catch (error) {
//         console.error(error);
//     }

// }
// async function updateFulfilledFulfillment(req, res) {
//     console.log('updateFulfilledFulfillment is firing')
//     id = req.body.id
//     // Date.now()
//     try {
//         await Ticket.update({ _id: req.body.id }, { $set: { fulfilled: true, date_fulfilled: Date.now() } })
//     }
//     catch (error) {
//         console.error(error);
//     }
// }

function getTickets(req, res) {
    Ticket.find((err, data) => {
        // console.log('data: ' + data + ' :data')
        let sortedData = data.sort((a, b) => a.date_ordered - b.date_ordered)
        // console.log('sortedData: ' + sortedData + ' :sortedData')
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: sortedData })
    })
}

// not working
// ui not built??
// function showTicket(req, res) {
//     // req.params.id is undefined
//     console.log('req type: ' + typeof (req.params))
//     console.log('req keys: ' + Object.keys(req.params))
//     console.log('req values: ' + Object.values(req.params))
//     console.log('debugger!')
//     debugger;
//     Ticket.findOne({
//         _id: req.params.id
//     }, (err, data) => {
//         // data is the _id for the selected ticket
//         console.log('showTicket')
//         console.log('_id: req.params.id: ' + Object.keys(arguments[0].body))
//         if (err) return res.json({ success: false, error: err });
//         return res.json({ success: true, data: data })
//     })
// }

function addTicket(req, res) {
    let ticket = new Ticket()

    console.log('ticket: ' + ticket)
    console.log('req: ' + Object.keys(req))
    console.log('res: ' + Object.keys(res))
    console.log('req.body: ' + Object.keys(req.body.input))
    // this is incorrect
    // what object is this referring to?
    // what does it have to align with?
    // what exactly is req.body doing? 
    // is this function recieving a req?
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


/* gets id out of response that is sent to back end,
looks for document with matching id,
delete document
*/
// function deleteTicket() {
//     console.log('deleteCTRl is working')
//     const { id } = req.body
//     Ticket.findByIdAndRemove(id, (err) => {
//         if (err) return res.send(err)
//         return res.json({ success: true })
//     })
// }