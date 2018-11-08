const dataRouter = require('express').Router()
const Data = require('../models/companyData')

dataRouter.get('/', async (req, res) => {
  try {
    const data = await Data.find({})
    res.json(data.map(Data.format))
  } catch (error) {
    console.log(error)
  }
})

dataRouter.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await Data.findById(id)

    if (data) {
      res.json(Data.format(data))
    } else {
      res.status(404).end()
    }
  } catch (error) {
    res.status(400).send({ error: 'malformatted id' })
  }
})

module.exports = dataRouter
