const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
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
    required: true,
    default: "TOURIST",
    enum: ['ADMIN', 'OPERATOR', 'TOURIST'],
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
