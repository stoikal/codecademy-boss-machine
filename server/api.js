const express = require('express')
const apiRouter = express.Router()

apiRouter.get('/ito', (req, res) => {
  res.send([{ a: 1 }])
})

module.exports = apiRouter
