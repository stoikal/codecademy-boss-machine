const express = require('express')
const minionsRouter = require('./routes/minions')
const ideasRouter = require('./routes/ideas')
const meetingsRouter = require('./routes/meetings')

const apiRouter = express.Router()

apiRouter.use('/minions', minionsRouter)

apiRouter.use('/ideas', ideasRouter)

apiRouter.use('/meetings', meetingsRouter)

module.exports = apiRouter
