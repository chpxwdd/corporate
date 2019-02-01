const express = require('express')
const router = express.Router()

const { Role } = require('../models/schema')

//CRUD OPERATIONS
// Create[POST]
router.post('/', function(req, res, next) {
  console.log(req.body)
  res.send('corporate -> role -> create')
  const { body } = req

  if (!body.name) {
    return res.status(422).json({
      errors: {
        name: 'is required',
      },
    })
  }

  const finalArticle = new Articles(body)

  return finalArticle
    .save()
    .then(() => res.json({ role: finalArticle.toJSON() }))
    .catch(next)
})

module.exports = router
