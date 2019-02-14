const express = require('express')
const router = express.Router()

const repo = require('../repository/role')

// FETCH
router.get('/', repo.findAll)
// CREATE
router.post('/create', repo.create)
// READ
router.get('/:_id', repo.read)
// UPDATE
router.put('/:_id', repo.update)
// DELETE
router.delete('/:_id', repo.delete)

module.exports = router
