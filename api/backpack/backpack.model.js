const { Schema, model } = require("mongoose");

const BackpackSchema = Schema({
  userId: {
    type: String,
    required: true,
  },
  tours: [
    {
      tourId: {
        type: String,
      },
      persons: {
        type: Number,
        default: 1,
      },
      message: {
        type: String,
      },
    }
  ],
},
{
  timestamps: true,
  versionKey: false,
});

module.exports = model('Backpack', BackpackSchema);
