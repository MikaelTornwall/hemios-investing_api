const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
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
    cashflowStatementHistoryQuarterly: data.cashflowStatementHistoryQuarterly,
    balanceSheetHistoryQuarterly: data.balanceSheetHistoryQuarterly,
    incomeStatementHistoryQuarterly: data.incomeStatementHistoryQuarterly
  }
}

const Data = mongoose.model('Data', dataSchema)


// const dataSchema = new mongoose.Schema({
//   cashflowStatementHistoryQuarterly: Object
// })
//
// dataSchema.statics.format = (company) => {
//   return {
//     id: company._id,
//     cashflowStatementHistoryQuarterly: company.cashflowStatementHistoryQuarterly
//   }
// }
//
// const Data = mongoose.model('Data', dataSchema)


module.exports = Data
