const Ticket = require('../Data/TicketModel')

module.exports = {
    index,
}


async function index(req, res) {
    // Ticket.find((err, data) => {
    //     if (err) return res.json({ success: false, error: err });
    //     return res.json({ success: true, data: data })
    // })
    try {
        const ticket = await Ticket.find({});
        res.status(200).json(ticket);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
