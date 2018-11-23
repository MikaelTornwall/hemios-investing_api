const mongoose = require('mongoose')

const kpiSchema = new mongoose.Schema({
  id: String,
  kpiCategories: [
    {
      name: String,
      categories: {}
    }
  ]
},
{
  collection: 'kpis'
})

kpiSchema.statics.format = (data) => {
  return {
    id: data._id,
    kpiCategories: data.kpiCategories
  }
}

const Kpis = mongoose.model('Kpis', kpiSchema)

module.exports = Kpis
