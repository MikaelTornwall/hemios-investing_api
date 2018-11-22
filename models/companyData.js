const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  name: String,
  uuid: String,
  id: String,
  sector: String,
  values: {
    cashflowStatementHistoryQuarterly: [],
    balanceSheetHistoryQuarterly: [],
    incomeStatementHistoryQuarterly: []
  }
},
{
  collection: 'financial_data_quarterly'
})

dataSchema.statics.format = (data) => {
  return {
    uuid: data._id,
    name: data.name,
    id: data.id,
    sector: data.sector,
    values: data.values
  }
}

const Data = mongoose.model('Data', dataSchema)

module.exports = Data
