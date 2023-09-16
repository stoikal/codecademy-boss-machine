const express = require('express')
const Model = require('../model')
const db = require('../db')

const router = express.Router()

const Ideas = new Model('ideas')

const getIdea = (req, res, next) => {
    const { id } = req.params
  
    const idea = Ideas.retrieve(id)
  
    if (idea) {
      req.idea = idea
      return next()
    }
  
    res.status(404).send()
}

router.get('/', (req, res) => {
    res.send(Ideas.list())
})

router.get('/:id', getIdea, (req, res) => {
    res.send(req.idea)
})

router.put('/:id', getIdea, (req, res) => {
    const { id } = req.idea

    const idea = Ideas.update(id, req.body)
    res.send(idea)
})

router.post('/', (req, res) => {
    const idea = Ideas.add(req.body)

    res.send(idea)
})

router.delete('/:id', getIdea, (req, res) => {
    Ideas.delete(req.idea.id)

    res.send()
})



module.exports = router
