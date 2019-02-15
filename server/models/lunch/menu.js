const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaMenu = new Schema()
schemaMenu.set('collection', 'Menu')

schemaMenu.add({
  id: Schema.Types.ObjectId,
  dayDotation: Schema.Types.Decimal128,
  dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
  publish: { type: Date, default: Date.now },
})

/* INSTALL ACL ROLE */

module.exports = {
  Menu: mongoose.model('Menu', schemaMenu),
}
