const mongoose = require('mongoose')
const Schema = mongoose.Schema


const WatchSchema = new Schema(
    // Watch as a seperate schema is an ex of referencing
    {
        image: String,
        model_number: String
    },
    { timestamps: true }

)

module.exports = mongoose.model('Watch', WatchSchema)