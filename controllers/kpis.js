const kpisRouter = require('express').Router()
const Kpis = require('../models/kpiData.js')

kpisRouter.get('/', async (req, res) => {
  try {
    const data = await Kpis.find({})
    res.json(data.map(Kpis.format))
  } catch (error) {
    console.log(error)
  }
})

module.exports = kpisRouter
