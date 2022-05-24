const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  avatar: {
    type: String,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'OPERATOR', 'TOURIST'],
    default: "TOURIST",
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  google: {
    type: Boolean,
    default: false,
  },
  facebook: {
    type: Boolean,
    default: false,
  },
},
{
  timestamps: true,
  versionKey: false,
});

module.exports = model('User', UserSchema);
