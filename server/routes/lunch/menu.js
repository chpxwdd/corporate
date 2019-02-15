const express = require('express')
const router = express.Router()

const repo = require('./repo/menu')

router.get('/', repo.fetch)
router.post('/create', repo.create)
router.get('/:_id', repo.read)
router.put('/:_id', repo.update)
router.delete('/:_id', repo.delete)

module.exports = router
