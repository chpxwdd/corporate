const express = require('express')
const router = express.Router()

const repository = require('../repository/auth.acl.role')

// CREATE
router.post('/create', repository.create)
// READ
router.get('/:_roleId', repository.findOne)
// UPDATE
router.put('/:_roleId', repository.update)
// DELETE
router.delete('/:_roleId', repository.delete)
// FETCH
router.get('/', repository.findAll)

module.exports = router
