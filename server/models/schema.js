const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaAuthUser = new Schema()
schemaAuthUser.set('collection', 'auth-user')

const schemaAclRole = new Schema()
schemaAclRole.set('collection', 'acl-role')

schemaAuthUser.add({
  id: mongoose.Schema.ObjectId,
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  roles: [{ type: Schema.Types.ObjectId, ref: 'AclRole' }],
})

schemaAclRole.add({
  id: mongoose.Schema.ObjectId,
  title: { type: String, required: true },
  parent: [{ type: Schema.Types.ObjectId, ref: 'AclRole', default: null }],
  // users: [{ type: Schema.Types.ObjectId, ref: 'AuthUser', default: null }],
})

/* INSTALL ACL ROLE */

module.exports = {
  AuthUser: mongoose.model('AuthUser', schemaAuthUser),
  AclRole: mongoose.model('AclRole', schemaAclRole),
}
