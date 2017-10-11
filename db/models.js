
// DEPENDENCIES //
// require database connection //
const mongoose = require('./connection.js')

//// requiring our exported schemas ////
const Schema = require('./schema.js')

// CREATE MODELS //

// grab individual schemas that were exported //
const UserSchema = Schema.UserSchema

// define model, using a schema //
const User = mongoose.model("User", UserSchema)

// EXPORT MODULE //

//export models //
module.exports = {
  User
}
