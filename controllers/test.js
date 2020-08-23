const Data = require('../Data/data');


module.exports = {
    index,
    create,
    delete: deleteOne,
    update
}


// can't use arrow functions

function index(req, res) {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
}



function create(req, res) {
    // mongoose method
    let data = new Data();

    const { id, message } = req.body;
    // if there is no message or if there is no id and id is not 0 
    // aka validation
    if ((!id && id !== 0) || !message) {
        // fail the creation attempt
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    // make the message portion of the DB the same as the user input message
    data.message = message;
    data.id = id;
    // save the object with the user inputs reassignments
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
}


function deleteOne(req, res) {
    const { id } = req.body;
    Data.findByIdAndRemove(id, (err) => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
}


function update(req, res) {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
}
