
////////////// DEPENDENCIES /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//// require database connection ////
const mongoose = require('./connection.js')

//// requiring our exported schemas ////
const Schema = require('./schema.js')


////////////// CREATE MODELS ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//// grab individual schemas that were exported ////
const UserSchema = Schema.UserSchema
const TheaterSchema = Schema.TheaterSchema
const MovieSchema = Schema.MovieSchema

//// define model, using a schema ////
const User = mongoose.model("User", UserSchema)
  // 1st argument is what you want to call it, 2nd is which Schema it follows)
  // this creates a pluralized collection in memory???
const Theater = mongoose.model("Theater", TheaterSchema)
const Movie = mongoose.model("Movie", MovieSchema)





////////////// EXPORT MODULE //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

/// export models ///
module.exports = {
  User,
  Theater,
  Movie
}
