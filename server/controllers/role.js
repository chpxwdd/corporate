const { Role } = require('../models/schema.js')

/**
 * CREATE [POST]
 */
exports.create = (req, res) => {
  console.log('create tole')
  console.log('\t ', req)
  console.log('\t ', res)
  // Create a Role
  const Role = new Role({
    title: req.body.title,
  })

  // Save a Role into MongoDB
  Role.save()
    .then(Role => {
      res.send(Role.toClient())
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
  Role.findById(req.params.RoleId)
    .then(Role => {
      if (!Role) {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params.RoleId,
        })
      }
      res.send(Role.toClient())
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
  Role.findOneAndUpdate(
    { _id: req.params.RoleId },
    {
      title: req.body.title,
    },
    { new: true }
  )
    .then(Role => {
      if (!Role) {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params.RoleId,
        })
      }
      res.send(Role.toClient())
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
  Role.findByIdAndRemove(req.params.RoleId)
    .then(Role => {
      if (!Role) {
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
  Role.find()
    .then(Roles => {
      let returnedRoles = []

      for (let i = 0; i < Roles.length; i++) {
        returnedRoles.push(Roles[i].toClient())
      }

      res.send(returnedRoles)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message,
      })
    })
}
