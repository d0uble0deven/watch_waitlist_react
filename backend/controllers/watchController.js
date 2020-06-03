const Watch = require('../Data/WatchModel')

module.exports = {
    getWatches
}

function getWatches(req, res) {
    Watch.find((err, data) => {
        if (err) return res.json({ success: false, error: err })
        return res.json({ success: true, data: data })

    })
}