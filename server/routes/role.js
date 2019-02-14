const express = require('express')
const router = express.Router()

const repository = require('../repository/role')

// FETCH
router.get('/', repository.findAll)
// CREATE
router.post('/create', repository.create)
// READ
router.get('/:_roleId', repository.findOne)
// UPDATE
router.put('/:_roleId', repository.update)
// DELETE
router.delete('/:_roleId', repository.delete)

module.exports = router
