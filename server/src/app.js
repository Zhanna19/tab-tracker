const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgen = require('morgan')

const app = express()
app.use(morgen('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res, next) => {
  res.send({
    message: `Hello! ${req.body.email}! Your user was registered! have fun!`
  })
})

module.exports = app
