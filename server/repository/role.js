const { Role } = require('../models/schema.js')

/**
 * CREATE [POST]
 */
exports.create = (req, res) => {
  // Create a Role
  const Role = new Role({
    title: req.body.title,
  })

  // Save a Role into MongoDB
  Role.save()
    .then(role => {
      res.send(role.toClient())
    })
    .catch(err => {
      res.status(500).send({
        message: err.message,
      })
    })
}

/**
 *  READ
 */
exports.findOne = (req, res) => {
  Role.findById(req.params._roleId)
    .then(role => {
      if (!role) {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params._roleId,
        })
      }
      res.send(role.toClient())
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params._roleId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving Role with id ' + req.params._roleId,
      })
    })
}

/**
 * UPDATE
 */
exports.update = (req, res) => {
  // Find Role and update it
  Role.findOneAndUpdate(
    { _id: req.params._roleId },
    {
      title: req.body.title,
    },
    { new: true }
  )
    .then(role => {
      if (!role) {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params._roleId,
        })
      }
      res.send(role.toClient())
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params._roleId,
        })
      }
      return res.status(500).send({
        message: 'Error updating Role with id ' + req.params._roleId,
      })
    })
}

/**
 *  DELETE
 */
exports.delete = (req, res) => {
  Role.findByIdAndRemove(req.params._roleId)
    .then(role => {
      if (!role) {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params._roleId,
        })
      }
      res.send({ message: 'Role deleted successfully!' })
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params._roleId,
        })
      }
      return res.status(500).send({
        message: 'Could not delete Role with id ' + req.params._roleId,
      })
    })
}

// FETCH all Roles
exports.findAll = (req, res) => {
  Role.find()
    .then(roles => {
      let returnedRoles = []

      for (let i = 0; i < roles.length; i++) {
        returnedRoles.push(roles[i].toClient())
      }

      res.send(returnedRoles)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message,
      })
    })
}
