const express = require('express')
const Model = require('../model')

const router = express.Router()

const Minions = new Model('minions')

const getMinion = (req, res, next) => {
  const { id } = req.params

  const minion = Minions.retrieve(id)

  if (minion) {
    req.minion = minion
    return next()
  }

  res.status(404).send()
}

router.get('/', (req, res) => {
  res.send(Minions.list())
})

router.get('/:id', getMinion, (req, res) => {
  res.send(req.minion)
})



router.put('/:id', getMinion,  (req, res) => {
  const { id } = req.minion
  
  Minions.update(id, req.body)

  res.send(Minions.retrieve(id))
})

router.post('/', (req, res) => {
  const minion = Minions.add(req.body)
  res.send(minion)
})

router.delete('/:id', getMinion, (req, res) => {
  const { id } = req.minion

  Minions.delete(id)

  res.send()
})

module.exports = router

// pada hari minggu kuturut ayah ke kota naik delman istimewa kududuk di muka duduk di samping pak kusir yangs desegan bekerje gmeendarai kdua supaya baik jalannya pda sri mingg  pad haria mingug kutrut aya je to anpadharioiggu kturut ya ket konaikdelnidudpapad hardengan ini mencareitakan hal hal yang sehariusen tidak di ceri dceriktakan fen seperti apa adaya dunia yang akan diketahu seperti apa adanya dnia dngab ini apapad ahari minggu kuturtu aya