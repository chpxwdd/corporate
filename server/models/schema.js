const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema()
const RoleSchema = new Schema()

UserSchema.add({
  id: mongoose.Schema.ObjectId,
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }],
})

RoleSchema.add({
  id: mongoose.Schema.ObjectId,
  name: { type: String, required: true },
  parent: [{ type: Schema.Types.ObjectId, ref: 'Role', default: null }],
  users: [{ type: Schema.Types.ObjectId, ref: 'User', default: null }],
})
module.exports = {
  User: mongoose.model('User', UserSchema),
  Role: mongoose.model('Role', RoleSchema),
}
