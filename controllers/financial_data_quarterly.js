const dataQRouter = require('express').Router()
const Data = require('../models/companyData')

dataQRouter.get('/', async (req, res) => {
  try {
    const data = await Data.find({})
    res.json(data.map(Data.format))
  } catch (error) {
    console.log(error)
  }
})

dataQRouter.get('/:id', async (req, res) => {
  try {
    console.log(req.params)
    const id = req.params.id
    const data = await Data.findOne({id: id})

    if (data) {
      res.json(Data.format(data))
    } else {
      res.status(404).end()
    }
  } catch (error) {
    res.status(400).send({ error: 'malformatted id' })
  }
})

dataQRouter.get('/:id/cashflowStatement/', async (req, res) => {
  try {
    const id = req.params.id
    const data = await Data.findOne({id: id})
    console.log(data)

    if (data) {
      const cashflowStatement = await data.values.cashflowStatementHistoryQuarterly
      res.json(cashflowStatement)
    } else {
      res.status(404).end()
    }

  } catch (error) {
    res.status(400).send({ error: 'malformatted' })
  }
})

dataQRouter.get('/:id/balanceSheet/', async (req, res) => {
  try {
    const id = req.params.id
    const data = await Data.findOne({id: id})
    console.log(data)

    if (data) {
      const balanceSheet = await data.values.balanceSheetHistoryQuarterly
      res.json(balanceSheet)
    } else {
      res.status(404).end()
    }

  } catch (error) {
    res.status(400).send({ error: 'malformatted' })
  }
})

dataQRouter.get('/:id/incomeStatement/', async (req, res) => {
  try {
    const id = req.params.id
    const data = await Data.findOne({id: id})
    console.log(data)

    if (data) {
      const incomeStatement = await data.values.incomeStatementHistoryQuarterly
      res.json(incomeStatement)
    } else {
      res.status(404).end()
    }

  } catch (error) {
    res.status(400).send({ error: 'malformatted' })
  }
})

module.exports = dataQRouter
