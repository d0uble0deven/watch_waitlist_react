const mongoose = require('mongoose')
const Schema = mongoose.Schema


const WatchSchema = new Schema(
    // Watch as a seperate schema is an ex of referencing
    {
        name: String,
        image: String,
    },
    { timestamps: true }

)

module.exports = mongoose.model('Watch', WatchSchema)