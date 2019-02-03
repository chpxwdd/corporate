const { AclRole } = require('../models/schema.js')

/**
 * CREATE [POST]
 */
exports.create = (req, res) => {
  // Create a Role
  const AclRole = new AclRole({
    title: req.body.title,
  })

  // Save a Role into MongoDB
  AclRole.save()
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
  AclRole.findById(req.params.RoleId)
    .then(role => {
      if (!role) {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params.RoleId,
        })
      }
      res.send(role.toClient())
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params.RoleId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving Role with id ' + req.params.RoleId,
      })
    })
}

/**
 * UPDATE
 */
exports.update = (req, res) => {
  // Find Role and update it
  AclRole.findOneAndUpdate(
    { _id: req.params.RoleId },
    {
      title: req.body.title,
    },
    { new: true }
  )
    .then(role => {
      if (!role) {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params.RoleId,
        })
      }
      res.send(role.toClient())
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params.RoleId,
        })
      }
      return res.status(500).send({
        message: 'Error updating Role with id ' + req.params.RoleId,
      })
    })
}

/**
 *  DELETE
 */
exports.delete = (req, res) => {
  AclRole.findByIdAndRemove(req.params.RoleId)
    .then(role => {
      if (!role) {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params.RoleId,
        })
      }
      res.send({ message: 'Role deleted successfully!' })
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params.RoleId,
        })
      }
      return res.status(500).send({
        message: 'Could not delete Role with id ' + req.params.RoleId,
      })
    })
}

// FETCH all Roles
exports.findAll = (req, res) => {
  AclRole.find()
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
