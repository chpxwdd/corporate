const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const validateRegisterInput = require('../validation/register')
const validateLoginInput = require('../validation/login')

const { Auth, AuthAclRole } = require('../models/schema')

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
    } else {
      const memberAuthAclRole = new AuthAclRole()
      const memberAuth = new Auth({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: memberAuthAclRole.find({ title: 'member' }),
      })

      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.error('There was an error', err)
        else {
          bcrypt.hash(memberAuth.password, salt, (err, hash) => {
            if (err) console.error('There was an error', err)
            else {
              memberAuth.password = hash
              memberAuth.save().then(user => {
                res.json(user)
              })
            }
          })
        }
      })
    }
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
        if (err) console.error('There is some error in token', err)
        else {
          res.json({
            success: true,
            token: `Bearer ${token}`,
          })
        }
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
