const mongoose = require("mongoose");
const { roleInstanceSchema } = require("./role.js");
const Schema = mongoose.Schema;

const userInstanceSchema = new Schema({
  id: mongoose.Schema.ObjectId,
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  roles: [{ type: Schema.Types.ObjectId, ref: "roleInstance" }]
});

module.exports.userInstanceSchema = userInstanceSchema; // schema
module.exports.userInstance = mongoose.model(
  "userInstance",
  userInstanceSchema
); //model
