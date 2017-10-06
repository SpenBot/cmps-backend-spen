
////////////// CONFIGURATION ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


//// require model exports ////
const Models = require('./models.js')

//// require seed data ////
const UserSeedData = require('./seedsUser.json')
const TheaterSeedData = require('./seedsTheater.json')
const MovieSeedData = require('./seedsMovie.json')




////////////// SEEDING //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


//// grab individial models that were exported ////
const User = Models.User
const Theater = Models.Theater
const Movie = Models.Movie

//// clear models ////
User.remove({})
Theater.remove({})
Movie.remove({})


//// clear collections ////
User.collection.remove({})
Theater.collection.remove({})
Movie.collection.remove({})

//// insert seed data into model collection ////
User.collection.insert(UserSeedData)
Theater.collection.insert(TheaterSeedData)
Movie.collection.insert(MovieSeedData)
