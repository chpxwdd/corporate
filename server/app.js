const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
// const bcrypt = require('bcryptjs')
const config = require('./config/db')
const routesAuth = require('./routes/auth')
const routesRole = require('./routes/role')

mongoose.connect(config.path, config.options).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
)
// const memberRole = new modelRole({ title: 'member' })
// memberRole.save()
// const adminRole = new modelRole({ title: 'admin', parent: memberRole })
// adminRole.save()

const app = express()
app.use(passport.initialize())

require('./config/passport')(passport)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/auth', routesAuth)
app.use('/api/role', routesRole)

// app.get("/", function(req, res) {  res.send("hello");}); // check test
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('running on', PORT, 'port')
})
