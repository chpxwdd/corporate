const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
// const bcrypt = require('bcryptjs')
const config = require('./config/db')

const routesCoreUser = require('./routes/core.user')
// const routesCoreRole = require('./routes/core.role')

const routesLunchDish = require('./routes/lunch.dish')
const routesLunchMenu = require('./routes/lunch.menu')
const routesLunchOrder = require('./routes/lunch.order')

mongoose
  .connect(config.path, config.options)
  .then(() => {
    console.log('Database is connected')
  })
  .catch(err => {
    console.log('Can not connect to the database' + err)
  })

const app = express()
app.use(passport.initialize())

require('./config/passport')(passport)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/core/user', routesCoreUser)
app.use('/api/core/role', routesCoreRole)
app.use('/api/core/dish', routesLunchDish)
app.use('/api/core/menu', routesLunchMenu)
app.use('/api/core/order', routesLunchOrder)

// app.get("/", function(req, res) {  res.send("hello");}); // check test
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('running on', PORT, 'port')
})
