// require mongoose
const mongoose = require('mongoose')

// Creating shorthand for the Schema Constructor
const {Schema} = mongoose
// Schema
const breadSchema = new Schema({
  name: {type: String, required: true},
  hasGluten: Boolean,
  image: {type: String, default: 'http://placehold.it/500x500.png'},
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
  }
})

// Helper Method
breadSchema.methods.getBakedBy = function() {
  return `${this.name} was baked with Love by ${this.baker}`
}

// Model and Export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread