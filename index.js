////////////// SERVER CONFIGURATION ////////////////////////
////////////////////////////////////////////////////////////

/// require external module dependencies ///
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

/// require models from models.js ///
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






////////////// ROUTES /////////////////////////////////////////
///////////////////////////////////////////////////////////////

/// grab each model, from exported models  ///
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

app.get("/api/movies/:title", function(req, res){
  Movie.findOne({title: req.params.title}).then(function(movie){
    res.json(movie)
    });
  });

app.post("/api/movies", function(req, res){
  Movie.create(req.body.movie).then(task => {
    res.json('/movies/'+ movie.titile)
  });
});


app.get('/api/users', (req, res) => {
  User.find()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      console.log(err)
    })
})


app.get("/api/users/:username", function(req, res){
  User.findOne({username: req.params.username}).then(function(user){
    res.json(user)
    });
  });

app.post("/api/users", function(req, res){
  User.create(req.body.user).then(user => {
    res.json('/users/'+ username)
  });
});


app.get('/api/theaters', (req, res) => {
  Theater.find()
    .then((theaters) => {
      res.json(theaters)
    })
    .catch((err) => {
      console.log(err)
    })
})


app.get("/api/theaters/:name", function(req, res){
  Theater.findOne({name: req.params.name}).then(function(theater){
    res.json(theater)
    });
  });

app.post("/api/theaters", function(req, res){
  Theater.create(req.body.theater).then(theater => {
    res.json('/theaters/'+ name)
  });
});
