const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const Baker = require('../models/baker.js')

// INDEX
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





breads.get('/', (req, res) => {
  Bread.find()
  .then(foundBreads => {
    
    console.log(foundBreads)
   
    res.render('index', {
        breads: foundBreads, 
        title: 'Index Page'
      })
    })
  })
  //   res.render('index', 
  //   {
  //       breads: Bread,
  //       title: 'Index Page'
  //   }
  //  )
//    res.send(Bread)

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
  Bread.findById(req.params.id)
  .then (foundBread => {
    res.render('edit', {
      bread: foundBread
    })
  })
})

// SHOW
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
    .then(foundBread => {
      const bakedBy = foundBread.getBakedBy()
      console.log(bakedBy)
      res.render('show', {
        bread: foundBread
      })
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
    console.log(updatedBread)
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