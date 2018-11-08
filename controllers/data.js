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

module.exports = dataRouter
