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

dataRouter.get('/:id/cashflowStatement/', async (req, res) => {
  try {
    const id = req.params.id
    const data = await Data.findById(id)
    console.log(data)

    if (data) {
      const cashflowStatement = await data.cashflowStatementHistoryQuarterly
      res.json(cashflowStatement)
    } else {
      res.status(404).end()
    }

  } catch (error) {
    res.status(400).send({ error: 'malformatted' })
  }
})

dataRouter.get('/:id/balanceSheet/', async (req, res) => {
  try {
    const id = req.params.id
    const data = await Data.findById(id)
    console.log(data)

    if (data) {
      const balanceSheet = await data.balanceSheetHistoryQuarterly
      res.json(balanceSheet)
    } else {
      res.status(404).end()
    }

  } catch (error) {
    res.status(400).send({ error: 'malformatted' })
  }
})

dataRouter.get('/:id/incomeStatement/', async (req, res) => {
  try {
    const id = req.params.id
    const data = await Data.findById(id)
    console.log(data)

    if (data) {
      const incomeStatement = await data.incomeStatementHistoryQuarterly
      res.json(incomeStatement)
    } else {
      res.status(404).end()
    }

  } catch (error) {
    res.status(400).send({ error: 'malformatted' })
  }
})

module.exports = dataRouter
