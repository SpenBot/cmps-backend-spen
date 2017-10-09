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

app.listen(process.env.PORT || 4000, () => {
    console.log("\n\tServer active. Listening on port 4000\n")
})






////////////// ROUTES /////////////////////////////////////////
///////////////////////////////////////////////////////////////

/// grab each model, from exported models  ///
const User = Models.User
const Theater = Models.Theater
const Movie = Models.Movie




////////////// MOVIES ROUTES ///////////////////////////////////

/// get all movies ///
app.get('/api/movies', (req, res) => {
  Movie.find()
    .then((movies) => {
      res.json(movies)
    })
    .catch((err) => {
      console.log(err)
    })
})

/// get one movie ///
app.get("/api/movies/:title", function(req, res){
  Movie.findOne({title: req.params.title}).then(function(movie){
    res.json(movie)
    });
  });

/// create movie ///
app.post("/api/movies", function(req, res){
  Movie.create(req.body.movie).then(task => {
    res.json('/movies/'+ movie.titile)
  });
});

/// update movie ///
app.post('/api/movies/:title', (req, res) => {
  Movie.findOneAndUpdate({title: req.params.title}, req.body.movie, {new: true}).then(movie => {
    res.json('/movies/' + movie.title)
  })
})

/// delete movie ///
app.post("/movies/:title/delete", (req, res) => {
  Movie.findOneAndRemove({title: req.params.title})
    .then(() => {
      res.json("/movies")
    })
})




////////////// USERS ROUTES ///////////////////////////////////

/// get all users ///
app.get('/api/users', (req, res) => {
  User.find()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      console.log(err)
    })
})

/// get one user ///
app.get("/api/users/:username", function(req, res){
  User.findOne({username: req.params.username}).then(function(user){
    res.json(user)
    });
  });

/// create user ///
app.post("/api/users", function(req, res){
  User.create(req.body.user).then(user => {
    res.json('/users/'+ username)
  });
});

/// update user ///
app.post('/api/users/:username', (req, res) => {
  User.findOneAndUpdate({username: req.params.username}, req.body.user, {new: true}).then(user => {
    res.json('/users/' + user.username)
  })
})

/// delete user ///
app.post("/users/:username/delete", (req, res) => {
  User.findOneAndRemove({username: req.params.username})
    .then(() => {
      res.json("/users")
    })
})









////////////// THEATERS ROUTES ///////////////////////////////////

/// get all theaters ///
app.get('/api/theaters', (req, res) => {
  Theater.find()
    .then((theaters) => {
      res.json(theaters)
    })
    .catch((err) => {
      console.log(err)
    })
})

/// get one theater ///
app.get("/api/theaters/:name", function(req, res){
  Theater.findOne({name: req.params.name}).then(function(theater){
    res.json(theater)
    });
  });

/// create theater ///
app.post("/api/theaters", function(req, res){
  Theater.create(req.body.theater).then(theater => {
    res.json('/theaters/'+ name)
  });
});

/// update theater ///
app.post('/api/theaters/:name', (req, res) => {
  User.findOneAndUpdate({name: req.params.name}, req.body.theater, {new: true}).then(theater => {
    res.json('/theaters/' + theater.name)
  })
})

/// delete theater ///
app.post("/theaters/:name/delete", (req, res) => {
  User.findOneAndRemove({name: req.params.name})
    .then(() => {
      res.json("/theaters")
    })
})
