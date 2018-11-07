if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

let mongoUrl = process.env.MONGODB_URI
let port = process.env.PORT

module.exports = {
  mongoUrl,
  port
}
