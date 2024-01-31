// require mongoose
const mongoose = require('mongoose')

// Creating shorthand for the Schema Constructor
const {Schema} = mongoose
// Schema
const breadSchema = new Schema({
  name: {type: String, required: true},
  hasGluten: Boolean,
  image: {type: String, default: 'http://placehold.it/500x500.png'}
})

// Model and Export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread