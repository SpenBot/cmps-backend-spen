// SERVER CONFIGURATION //

// require external module dependencies //
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// require models from models.js //
const Models = require('./db/models.js')

// require database connection module //
const mongoose = require('./db/connection.js')

// run app as an express application //
const app = express();

//enable use of static files, which is in a folder named public //
app.use(express.static(__dirname + '/public'))

// handles json post requests (needed for AJAX requests with JSON bodies) //
app.use(bodyParser.json({ extended: true }))
// handles form submissions //
// app.use(bodyParser.urlencoded({ extended: true }))

// use cors //
app.use(cors())

// RUN SERVER //

app.listen(4000, () => {
    console.log("\n\tServer active. Listening on port 4000\n")
})

// ROUTES //

// grab each model, from exported models //
const User = Models.User
const Theater = Models.Theater
const Movie = Models.Movie

// USERS ROUTES //

// get all users //
app.get('/api/users', (req, res) => {
  User.find()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      console.log(err)
    })
})

// get one user //
app.get("/api/users/:username", (req, res) => {
  User.findOne({username: req.params.username}).then(function(user){
    res.json(user)
    });
  });

// create user //
app.post("/api/users", (req, res) => {
  User.create(req.body).then(user => {
    console.log("post api/users", req.body);
    console.log("user:", user)
    res.json('/users/'+ user.username)
    res.json(user)
  });
});

// update user //
app.update('/api/users/:username', (req, res) => {
  User.findOneAndUpdate({username: req.params.username}, req.body.user, {new: true}).then(user => {
    res.json('/users/' + user.username)
  })
})

// delete user //
app.delete("/users/:username/delete", (req, res) => {
  User.findOneAndRemove({username: req.params.username})
    .then(() => {
      res.json("/users")
    })
})
