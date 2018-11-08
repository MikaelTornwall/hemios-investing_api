const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  name: String,
  id: String,
  cashflowStatementHistoryQuarterly: {
  },
  balanceSheetHistoryQuarterly: {
  },
  incomeStatementHistoryQuarterly: {
  }
},
{
  collection: 'AAPL'
})

dataSchema.statics.format = (data) => {
  return {
    name: data.name,
    id: data._id,
    cashflowStatementHistoryQuarterly: data.cashflowStatementHistoryQuarterly,
    balanceSheetHistoryQuarterly: data.balanceSheetHistoryQuarterly,
    incomeStatementHistoryQuarterly: data.incomeStatementHistoryQuarterly
  }
}

const Data = mongoose.model('Data', dataSchema)

module.exports = Data
