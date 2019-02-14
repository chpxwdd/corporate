const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const validateRegisterInput = require('../validation/register')
const validateLoginInput = require('../validation/login')

const { Auth, Role } = require('../models/schema')

const AUTH_ROLE_MEMBER = 'member'

router.post('/register', function(req, res) {
  const { errors, isValid } = validateRegisterInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  Auth.findOne({
    email: req.body.email,
  }).then(user => {
    if (user) {
      return res.status(400).json({
        email: 'Email already exists',
      })
    }

    // set default member role

    Role.findOne({ title: 'member' }).exec((err, member) => {
      if (err) {
        console.error('Can`t find role member in DB. Please re-install data', err)
        return false
      }

      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          console.error('There was an error', err)
          return false
        }

        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) {
            console.error('There was an error', err)
            return false
          }

          new Auth({
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
              return false
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

  Auth.findOne({ email }).then(user => {
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
          return false
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
