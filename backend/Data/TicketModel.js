const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TicketSchema = new Schema(
    {
        customer_name: {
            // example of embedding
            first_name: { type: String },
            last_name: { type: String },
            required: true
        },
        address: {
            street: { type: String },
            city: { type: String },
            state: { type: String },
            zip_code: { type: String },
            required: true

        },
        contact_info: {
            phone_number: { type: String },
            email: { type: String },
            required: true
        },
        order: { // array?
            date_ordered: { type: Date },
            watch_ordered: { type: String }, // enum?
            date_fulfilled: { type: Date },
            fulfilled: { type: Boolean },
            required: true
        },
        timestamps: true
    }
)