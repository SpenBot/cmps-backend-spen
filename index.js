////////////// SERVER CONFIGURATION ////////////////////////
////////////////////////////////////////////////////////////

/// require external module dependencies ///
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

/// require database connection module ///
const mongoose = require('./db/connection.js')

/// run app as an express application ///
const app = express();

/// enable use of static files, which is in a folder named public ///
app.use(express.static(__dirname + '/public'))

/// handles json post requests (needed for AJAX requests with JSON bodies) ///
app.use(bodyParser.json())
/// handles form submissions ///
app.use(bodyParser.urlencoded({ extended: true }))

/// use cors ///
app.use(cors())

////////////// RUN SERVER /////////////////////////////////////
///////////////////////////////////////////////////////////////

app.listen(4000, () => {
    console.log("\n\tServer active. Listening on port 4000\n")
})
