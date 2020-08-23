const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config()
const dbRoute = process.env.DB_ROUTE
const ticketRoutes = require('./routes/ticketRoute')
const watchRoutes = require('./routes/watchRoute')
const path = require('path')
var cookieParser = require('cookie-parser')
var methodOverride = require('method-override')

const API_PORT = process.env.PORT || 3001; // good!
const app = express();

app.use(cors());

// mlab uri: MONGODB_URI = mongodb://heroku_0nk87fw9:pq04f13j744p88vamktusip51k@ds125262.mlab.com:25262/heroku_0nk87fw9

// connects our back end code with the database
mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_URI, { useNewUrlParser: true, findandmodify: false, useUnifiedTopology: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
// allows for ui to talk to db, allows req.body
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(methodOverride('_method'));



// added with heroku deployment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('my-app/build'))

    const index = path.join(__dirname, '../my-app/build/index.html')
    app.get('/*', function (req, res) {
        res.sendFile(index);
    });
}


// append /api for our http requests
app.use('/tickets', ticketRoutes);
app.use('/watches', watchRoutes);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
// app.listen(process.env.PORT || API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

module.exports = app