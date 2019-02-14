const express = require('express')
const router = express.Router()

const repository = require('../repository/user')

// FETCH
router.get('/', repository.findAll)
// CREATE
router.post('/create', repository.create)
// READ
router.get('/:_id', repository.findOne)
// UPDATE
router.put('/:_id', repository.update)
// DELETE
router.delete('/:_id', repository.delete)

module.exports = router
