const { Schema, model } = require("mongoose");

const TourSchema = Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  imgs: {
    type: [String],
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
  },
  days: {
    type: Number,
    required: true,
  },
  nights: {
    type: Number,
    required: true,
  },
  itinerary: [
    {
      day: {
        type: Number,
      },
      tramo: {
        type: String,
      },
      description: {
        type: String,
      },
    }
  ],
  banner: {
    type: Boolean,
  },
  popular: {
    type: Boolean,
  },
  price: {
    type: Number,
    required: true,
  },
},
{
  timestamps: true,
  versionKey: false,
});

module.exports = model('Tour', TourSchema);
