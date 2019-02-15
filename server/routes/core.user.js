const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const validateRegisterInput = require('../validation/core.user.register')
const validateLoginInput = require('../validation/core.user.login')

const { CoreUser } = require('../models/core.user')
const { CoreRole } = require('../models/core.role')

const ROLE_MEMBER = 'member'

router.post('/register', function(req, res) {
  const { errors, isValid } = validateRegisterInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  CoreUser.findOne({
    email: req.body.email,
  }).then(user => {
    if (user) {
      return res.status(400).json({
        email: 'Email already exists',
      })
    }

    // set default member role

    CoreRole.findOne({ title: ROLE_MEMBER }).exec((err, member) => {
      if (err) {
        console.error('Can`t find role member in DB. Please re-install data', err)
        return
      }

      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          console.error('There was an error', err)
          return
        }

        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) {
            console.error('There was an error', err)
            return
          }

          new CoreUser({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            role: member._id,
          })
            .save()
            .then(user => {
              res.json(user)
            })
            .catch(err => {
              console.error('Registered user is not save with error:', err)
            })
        })
      })
    })
  })
})

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  const email = req.body.email
  const password = req.body.password

  CoreUser.findOne({ email }).then(user => {
    if (!user) {
      errors.email = 'User not found'
      return res.status(404).json(errors)
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) {
        errors.password = 'Incorrect Password'
        return res.status(400).json(errors)
      }

      const payload = {
        id: user.id,
        username: user.username,
        role: user.role,
      }

      const jwtOptions = { expiresIn: 3600 }
      const jwtPhrase = 'secret'

      jwt.sign(payload, jwtPhrase, jwtOptions, (err, token) => {
        if (err) {
          console.error('There is some error in token', err)
          return
        }
        res.json({
          success: true,
          token: `Bearer ${token}`,
        })
      })
    })
  })
})

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email,
  })
})

module.exports = router
