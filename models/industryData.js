const mongoose = require('mongoose')

const industrySchema = new mongoose.Schema({
  id: String,
  Industries: {}
},
{
  collection: 'industries'
})

industrySchema.statics.format = (data) => {
  return {
    id: data._id,
    industries: data.Industries
  }
}

const Industries = mongoose.model('Industries', industrySchema)

module.exports = Industries
