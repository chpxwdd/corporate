const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaUser = new Schema()
schemaUser.set('collection', 'user')

schemaUser.add({
  id: mongoose.Schema.ObjectId,
  username: { type: String, required: true, unique: true, dropDups: true },
  email: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  role: { type: Schema.Types.ObjectId, ref: 'Role', default: null },
})

module.exports = {
  User: mongoose.model('User', schemaUser),
}
