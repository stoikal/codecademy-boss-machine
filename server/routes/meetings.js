const express = require('express')
const Model = require('../model')

const router = express.Router()

const Meetings = new Model('meetings')

const getMeeting = (req, res, next) => {
    const { id } = req.params
  
    const meeting = Meetings.retrieve(id)
  
    if (meeting) {
      req.meeting = meeting
      return next()
    }
  
    res.status(404).send()
}

router.get('/', (req, res) => {
    res.send(Meetings.list())
})

router.post('/', (req, res) => {
    if (req.body.time) {
        const meeting = Meetings.add(req.body)
        return res.send(meeting)
    } else {
        res.status(400).send()
    }

})

router.delete('/:id', getMeeting, (req, res) => {
    Meetings.delete(req.metting.id)

    res.send()
})

module.exports = router