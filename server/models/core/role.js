const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaRole = new Schema()
schemaRole.set('collection', 'CoreRole')

schemaRole.add({
  id: mongoose.Schema.ObjectId,
  title: { type: String, required: true, unique: true, dropDups: true },
  parent: { type: Schema.Types.ObjectId, ref: 'CoreRole', default: null },
})

/* INSTALL ACL ROLE */

module.exports = {
  Role: mongoose.model('CoreRole', schemaRole),
}
