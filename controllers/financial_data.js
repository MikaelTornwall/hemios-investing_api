const dataRouter = require('express').Router()
const FinancialData = require('../models/financialData')

dataRouter.get('/', async (req, res) => {
  try {
    const data = await FinancialData.find({})
    res.json(data.map(FinancialData.format))
  } catch (error) {
    console.log(error)
  }
})

dataRouter.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await FinancialData.findOne({id: id})

    if (data) {
      res.json(FinancialData.format(data))
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
    const data = await FinancialData.findOne({id: id})
    console.log(data)

    if (data) {
      const cashflowStatement = await data.values.cashflowStatementHistory
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
    const data = await FinancialData.findOne({id: id})
    console.log(data)

    if (data) {
      const balanceSheet = await data.values.balanceSheetHistory
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
    const data = await FinancialData.findOne({id: id})
    console.log(data)

    if (data) {
      const incomeStatement = await data.values.incomeStatementHistory
      res.json(incomeStatement)
    } else {
      res.status(404).end()
    }

  } catch (error) {
    res.status(400).send({ error: 'malformatted' })
  }
})

module.exports = dataRouter
