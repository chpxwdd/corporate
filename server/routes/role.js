const express = require('express')
const router = express.Router()

const { Role } = require('../models/schema')

router.post('/create', function(req, res) {
  Role.findOne({
    name: req.body.name,
  }).then(role => {
    if (role) {
      return res.status(400).json({
        name: 'Role already exists',
      })
    } else {
      const newRole = new Role({
        name: req.body.name,
      })

      if (err) console.error('There was an error', err)
      else {
        if (err) console.error('There was an error', err)
        else {
          newRole.save().then(role => {
            res.json(role)
          })
        }
      }
    }
  })
})

module.exports = router
