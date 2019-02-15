const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const config = require('./config/db')

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

// routers
// app.get("/", function(req, res) {  res.send("hello");}); // check test
// core
const routesCoreUser = require('./routes/core/user')
const routesCoreRole = require('./routes/core/role')
app.use('/api/core/user', routesCoreUser)
app.use('/api/core/role', routesCoreRole)

// lunch
const routesLunchMenu = require('./routes/lunch/menu')
const routesLunchDish = require('./routes/lunch/dish')
const routesLunchOrder = require('./routes/lunch/order')
app.use('/api/lunch/menu', routesLunchMenu)
app.use('/api/lunch/dish', routesLunchDish)
app.use('/api/lunch/order', routesLunchOrder)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('running on', PORT, 'port')
})
