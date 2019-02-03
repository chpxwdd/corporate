const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaAuthUser = new Schema()
schemaAuthUser.set('collection', 'auth.user')

const schemaAuthAclRole = new Schema()
schemaAuthAclRole.set('collection', 'auth.acl.role')

schemaAuthUser.add({
  id: mongoose.Schema.ObjectId,
  username: { type: String, required: true, unique: true, dropDups: true },
  email: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  role: { type: Schema.Types.ObjectId, ref: 'AuthAclRole', default: null },
})

schemaAuthAclRole.add({
  id: mongoose.Schema.ObjectId,
  title: { type: String, required: true, unique: true, dropDups: true },
  parent: { type: Schema.Types.ObjectId, ref: 'AuthAclRole', default: null },
})

/* INSTALL ACL ROLE */

module.exports = {
  AuthUser: mongoose.model('AuthUser', schemaAuthUser),
  AuthAclRole: mongoose.model('AuthAclRole', schemaAuthAclRole),
}
