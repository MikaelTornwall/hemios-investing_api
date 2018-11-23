const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dataQRouter = require('./controllers/financial_data_quarterly')
const dataRouter = require('./controllers/financial_data')
const industriesRouter = require('./controllers/industries')
const kpisRouter = require('./controllers/kpis')
const config = require('./utils/config')

const connectDatabase = async () => {
  try {
    await mongoose.connect(config.mongoUrl)
    console.log('connected database', config.mongoUrl)
  } catch (error) {
    console.log(error)
  }
}

connectDatabase()

app.use(bodyParser.json())
app.use(cors())
app.use('/api/financial_data_quarterly', dataQRouter)
app.use('/api/financial_data', dataRouter)
app.use('/api/industries', industriesRouter)
app.use('/api/kpis', kpisRouter)

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`server running on port ${config.port}`)
})

server.on('close', () => {
  mongoose.connection.close()
})
