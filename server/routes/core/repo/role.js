const { Role } = require('../../../models/core/role')

// CREATE
exports.create = (req, res) => {
  // check for exists

  // check parent

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

//  READ
exports.read = (req, res) => {
  Role.findById(req.params._id)
    .then(role => {
      if (role) {
        return res.send(role.toClient())
      }

      return res.status(404).send({
        message: 'Role not found with id ' + req.params._id,
      })
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params._id,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving Role with id ' + req.params._id,
      })
    })
}

// UPDATE
exports.update = (req, res) => {
  // Find Role and update it
  Role.findOneAndUpdate(
    { _id: req.params._id },
    {
      title: req.body.title,
    },
    { new: true }
  )
    .then(role => {
      if (!role) {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params._id,
        })
      }
      res.send(role.toClient())
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params._id,
        })
      }
      return res.status(500).send({
        message: 'Error updating Role with id ' + req.params._id,
      })
    })
}

// DELETE
exports.delete = (req, res) => {
  Role.findByIdAndRemove(req.params._id)
    .then(role => {
      if (!role) {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params._id,
        })
      }
      res.send({ message: 'Role deleted successfully!' })
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Role not found with id ' + req.params._id,
        })
      }
      return res.status(500).send({
        message: 'Could not delete Role with id ' + req.params._id,
      })
    })
}

// FETCH
exports.fetch = (req, res) => {
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
