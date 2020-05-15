const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./Data/data');
require('dotenv').config()
const dbRoute = process.env.DB_ROUTE
const testRoutes = require('./routes/test')
const path = require('path')
var cookieParser = require('cookie-parser')
var methodOverride = require('method-override')

const API_PORT = 3001;
const app = express();

app.use(cors());
// const router = express.Router();

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true, findandmodify: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
// allows for ui to talk to db, allows req.body
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// append /api for our http requests
app.use('/api', testRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// // this is our get method
// // this method fetches all available data in our database
// router.get('/getData', (req, res) => {
//     Data.find((err, data) => {
//         if (err) return res.json({ success: false, error: err });
//         return res.json({ success: true, data: data });
//     });
// });

// // this is our update method
// // this method overwrites existing data in our database
// router.post('/updateData', (req, res) => {
//     const { id, update } = req.body;
//     Data.findByIdAndUpdate(id, update, (err) => {
//         if (err) return res.json({ success: false, error: err });
//         return res.json({ success: true });
//     });
// });

// // this is our delete method
// // this method removes existing data in our database
// router.delete('/deleteData', (req, res) => {
//     const { id } = req.body;
//     Data.findByIdAndRemove(id, (err) => {
//         if (err) return res.send(err);
//         return res.json({ success: true });
//     });
// });

// // this is our create method
// // this method adds new data in our database
// router.post('/putData', (req, res) => {
//     // mongoose method
//     let data = new Data();

//     const { id, message } = req.body;
//     // if there is no message or if there is no id and id is not 0 
//     // aka validation
//     if ((!id && id !== 0) || !message) {
//         // fail the creation attempt
//         return res.json({
//             success: false,
//             error: 'INVALID INPUTS',
//         });
//     }

//     // make the message portion of the DB the same as the user input message
//     data.message = message;
//     data.id = id;
//     // save the object with the user inputs reassignments
//     data.save((err) => {
//         if (err) return res.json({ success: false, error: err });
//         return res.json({ success: true });
//     });
// });



// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));



module.exports = app