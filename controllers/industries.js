const industriesRouter = require('express').Router()
const Industries = require('../models/industryData.js')

industriesRouter.get('/', async (req, res) => {
  try {
    const data = await Industries.find({})
    res.json(data.map(Industries.format))
  } catch (error) {
    console.log(error)
  }
})

industriesRouter.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await Industries.findById(id)

    if (data) {
      res.json(Industries.format(data))
    } else {
      res.status(404).end()
    }
  } catch (error) {
    res.status(400).send({ error: 'malformatted id' })
  }
})

module.exports = industriesRouter
