const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

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
    console.log(foundBreads => {
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
})

// New
breads.get('/new', (req, res) => {
  res.render('new')
})

// EDIT
breads.get('/:indexArray/edit', (req, res) =>{
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    Bread.findById(req.params.id)
    .then(foundBread => {
      res.render('show', {
        bread: foundBread
      })
    })
})

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})



// Delete
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})

module.exports = breads