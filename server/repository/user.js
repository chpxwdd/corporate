const { User } = require('../models/schema.js')
// CREATE
exports.create = (req, res) => {}
// READ
exports.findOne = (req, res) => {
  User.findById(req.params._id)
    .then(user => {
      if (user) {
        return res.send(user.toClient())
      }

      return res.status(404).send({
        message: 'User not found with id ' + req.params._id,
      })
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params._id,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving User with id ' + req.params._id,
      })
    })
}
// UPDATE
exports.update = (req, res) => {}
// DELETE
exports.delete = (req, res) => {}
// FETCH all Roles
exports.findAll = (req, res) => {}
// FETCH Role by title
exports.findByTitle = (req, res) => {}
