const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaLunchDish = new Schema()
schemaLunchDish.set('collection', 'LunchDish')

schemaLunchDish.add({
  id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  price: { type: Schema.Types.Decimal128, required: true },
  properties: { type: Map, of: String },
  date: { type: Date, required: true },
  type: { type: String, required: true },
  analogs: [{ type: Schema.Types.ObjectId, ref: 'LunchDish', default: null }],
})

/* INSTALL ACL ROLE */

module.exports = {
  Dish: mongoose.model('LunchDish', schemaLunchDish),
}
