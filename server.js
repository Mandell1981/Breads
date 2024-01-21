// DEPENDENCIES
const express = require('express')

// CONFIRURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})
// LISTEN
app.listen(PORT, () => {
    console.log('listening on port',PORT); 
})
