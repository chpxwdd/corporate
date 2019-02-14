const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaUser = new Schema()
schemaUser.set('collection', 'user')

const schemaRole = new Schema()
schemaRole.set('collection', 'role')

schemaUser.add({
  id: mongoose.Schema.ObjectId,
  username: { type: String, required: true, unique: true, dropDups: true },
  email: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  role: { type: Schema.Types.ObjectId, ref: 'Role', default: null },
})

schemaRole.add({
  id: mongoose.Schema.ObjectId,
  title: { type: String, required: true, unique: true, dropDups: true },
  parent: { type: Schema.Types.ObjectId, ref: 'Role', default: null },
})

/* INSTALL ACL ROLE */

module.exports = {
  User: mongoose.model('User', schemaUser),
  Role: mongoose.model('Role', schemaRole),
}
