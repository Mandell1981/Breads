// Dependencies
const mongoose = require('mongoose')
const Bread = require('./bread')



// Schema
const bakerSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String

}, {toJSON: {virtuals: true}})

// Virtuals
bakerSchema.virtual('breads',  {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})



// MOdel and Export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker