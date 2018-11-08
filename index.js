const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dataRouter = require('./controllers/data')
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
app.use('/api/data', dataRouter)

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`server running on port ${config.port}`)
})

server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app,
  server
}
