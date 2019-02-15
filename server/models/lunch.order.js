const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaLunchOrder = new Schema()
schemaLunchOrder.set('collection', 'LunchOrder')

schemaLunchOrder.add({
  id: Schema.Types.ObjectId,
  person: { type: Schema.Types.ObjectId, ref: 'CoreUser', required: true },
  publish: { type: Date, default: Date.now },
  dishes: [{ type: Schema.Types.ObjectId, ref: 'LunchDish', required: true }],
})

/* INSTALL ACL ROLE */

module.exports = {
  Order: mongoose.model('LunchOrder', schemaLunchOrder),
}
