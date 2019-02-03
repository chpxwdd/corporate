const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const config = require('./config/db')
const routesAuthUser = require('./routes/auth.user')
const routesAclRole = require('./routes/acl.role')

const db = mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
)

const app = express()
app.use(passport.initialize())
require('./config/passport')(passport)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/auth/user', routesAuthUser)
app.use('/api/acl/role', routesAclRole)

// app.get("/", function(req, res) {  res.send("hello");}); // check test
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
