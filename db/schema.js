
////////////// DEPENDENCIES //////////////////////////////////
//////////////////////////////////////////////////////////////

//// connect to database ////
const mongoose = require('./connection.js')



////////////// CREATING THE SCHEMA ////////////////////////////
///////////////////////////////////////////////////////////////

const Schema = mongoose.Schema

const UserSchema = new Schema({
  "username": String,
  "password": String,
  "fav_theaters": String,
  "movies_wishlist": String,
  "search_history": String
})

const TheaterSchema = new Schema({
  "name": String,
  "address": String,
  "photo_url": String
})

const MovieSchema = new Schema({
  "title": String,
  "show_1": String,
  "show_2": String,
  "show_3": String,
  "theater": String
})



////////////// EXPORT MODULE /////////////////////////////////////
//////////////////////////////////////////////////////////////////

/// export schemas ///
module.exports = {
  UserSchema,
  TheaterSchema,
  MovieSchema
}
