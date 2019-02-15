const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
// const bcrypt = require('bcryptjs')
const config = require('./config/db')
const routesUser = require('./routes/core/user')
const routesRole = require('./routes/core/role')

const { User } = require('./models/core/user')
const { Role } = require('./models/core/role')

// const repositoryRole = require('./repository/role')
// repositoryRole.findByTitle('member', Role)

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

app.use('/api/core/user', routesUser)
app.use('/api/core/role', routesRole)

// app.get("/", function(req, res) {  res.send("hello");}); // check test
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('running on', PORT, 'port')
})
