const { Schema, model } = require("mongoose");

const OrderSchema = Schema({
  userId: {
    type: String,
    required: true,
  },
  tours: [
    {
      tourId: {
        type: String,
      },
      quoteId: {
        type: String,
        required: true,
      },
      persons: {
        type: Number,
        default: 1,
      },
    },
  ],
  amount: {
    type: Number,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    default: "PENDING",
  }
},
{
  timestamps: true,
  versionKey: false,
});

module.exports = model('Order', OrderSchema);
