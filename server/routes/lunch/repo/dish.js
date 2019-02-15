const { Dish } = require('../../../models/lunch/dish')

// CREATE
exports.create = (req, res) => {
  //   const User = new User({title: req.body.title})
  //   User.save().then(user => {res.send(user.toClient())}).catch(err => {res.status(500).send({message: err.message,})})
}

//  READ
exports.read = (req, res) => {
  //   User.findById(req.params._id).then(user => {res.send(user.toClient())}).catch(err => {res.status(500).send({message: 'Error retrieving User with id ' + req.params._id,})})
}

// UPDATE
exports.update = (req, res) => {
  //   User.findOneAndUpdate({ _id: req.params._id },{title: req.body.title},{ new: true }).then(user => {res.send(user.toClient())}).catch(err => {res.status(500).send({message: 'Error updating User with id ' + req.params._id   })})
}

// DELETE
exports.delete = (req, res) => {
  //   User.findByIdAndRemove(req.params._id).then(user => {res.send({ message: 'User deleted successfully!' })}).catch(err => { res.status(500).send({message: 'Could not delete User with id ' + req.params._id})})
}

// FETCH
exports.fetch = (req, res) => {
  //   User.find().then(users => {res.send(users)}).catch(err => {res.status(500).send({message: err.message})})
}
