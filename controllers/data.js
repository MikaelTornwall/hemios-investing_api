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

// dataRouter.get('/', async (req, res) => {
//   try {
//     Data.find({})
//       .then(data => {
//         res.json(data)
//       })
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ error: 'something went wrong' })
//   }
// })

module.exports = dataRouter
