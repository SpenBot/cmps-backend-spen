////////////// SERVER CONFIGURATION ////////////////////////
////////////////////////////////////////////////////////////

/// require external module dependencies ///
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Models = require('./db/models.js')

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

const User = Models.User
const Theater = Models.Theater
const Movie = Models.Movie

app.get('/api/movies', (req, res) => {
  Movie.find()
    .then((movies) => {
      res.json(movies)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/api/users', (req, res) => {
  User.find()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      console.log(err)
    })
})


app.get('/api/theaters', (req, res) => {
  Theater.find()
    .then((theaters) => {
      res.json(theaters)
    })
    .catch((err) => {
      console.log(err)
    })
})
