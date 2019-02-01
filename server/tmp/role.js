const mongoose = require("mongoose");
// const { userInstanceSchema } = require("./user.js");
const Schema = mongoose.Schema;

const roleInstanceSchema = new Schema({
  id: mongoose.Schema.ObjectId,
  name: {
    type: String,
    required: true
  }
  // parent: {
  //   type: mongoose.Schema.ObjectId,
  //   default: null
  // }
  // users: [{ type: Schema.Types.ObjectId, ref: "userInstance" }]
  // users: [userInstanceSchema]
});

module.exports.roleInstanceSchema = roleInstanceSchema; // schema
module.exports.roleInstance = mongoose.model(
  "roleInstance",
  roleInstanceSchema
); //model
