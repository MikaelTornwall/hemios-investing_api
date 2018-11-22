const mongoose = require('mongoose')

const financialDataSchema = new mongoose.Schema({
  name: String,
  uuid: String,
  id: String,
  sector: String,
  values: {
    cashflowStatementHistory: {
    },
    balanceSheetHistory: {
    },
    incomeStatementHistory: {
    }
  }
},
{
  collection: 'financial_data'
})

financialDataSchema.statics.format = (data) => {
  return {
    uuid: data._id,
    name: data.name,
    id: data.id,
    sector: data.sector,
    values: data.values
  }
}

const FinancialData = mongoose.model('FinancialData', financialDataSchema)

module.exports = FinancialData
