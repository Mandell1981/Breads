const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const Baker = require('../models/baker.js')


// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})




// Index
breads.get('/', async (req, res) => {
  const foundBakers = await Baker.find()
  const foundBreads = await Bread.find()
   res.render('index', {
        breads: foundBreads,
        bakers: foundBakers, 
        title: 'Index Page'
      })
    })
  

// New
breads.get('/new', (req, res) => {
  Baker.find()
  .then (foundBakers => {
    res.render('new', {
      bakers: foundBakers
    })
  })
})

// EDIT
breads.get('/:id/edit', (req, res) => {
  Baker.find()
  .then(foundBakers => {
  Bread.findById(req.params.id)
  .then (foundBread => {
    res.render('edit', {
      bread: foundBread,
      bakers: foundBakers
    })
   })
  })
})

// SHOW
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
    .populate('baker')
    .then(foundBread => {
      res.render('show', {
        bread: foundBread
      })
    })
    .catch(err => {
      res.send('404')
    })
})

// UPDATE
breads.put('/:id', (req, res) => {
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedBread => {
    res.redirect(`/breads/${req.params.id}`)
  })
})



// Delete
breads.delete('/:id', (req, res) => {
  Bread.findOneAndDelete(req.params.id)
  .then(deletedBread => {
   res.status(303).redirect('/breads')
  })
  
})

module.exports = breads