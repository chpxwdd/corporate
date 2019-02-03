const express = require('express')
const router = express.Router()

const roles = require('../controllers/acl.role.js')

// CREATE
router.post('/create', roles.create)
// READ
router.get('/:roleId', roles.findOne)
// UPDATE
router.put('/:roleId', roles.update)
// DELETE
router.delete('/:roleId', roles.delete)
// FETCH
router.get('/', roles.findAll)

module.exports = router
