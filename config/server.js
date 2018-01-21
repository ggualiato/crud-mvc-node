module.exports = () => {
  const express = require('express');
  const bodyParser = require('body-parser');
  const validator = require('express-validator');

  var app = express()

  app.set('view engine', 'ejs')
  app.set('views', './app/views')
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(validator())

  require('../app/routes/web')(app)

  app.listen(8000, () => {
    console.log('localhost:8000');
  })
}
