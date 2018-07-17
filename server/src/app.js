const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgen = require('morgan')

const app = express()
app.use(morgen('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res, next) => {
  res.send({
    message: 'Hello world'
  })
})

module.exports = app
