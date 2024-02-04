// Dependencies
const mongoose = require('mongoose')



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

})



// MOdel and Export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker