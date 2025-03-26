const mongoose = require('mongoose');

const outfitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name.'],
    },
    items: {
      type: [mongoose.Schema.ObjectId],
      ref: 'Item',
    },
    category: {
      type: String,
      required: [true, 'Please provide a category.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Outfit = mongoose.model('Outfit', outfitSchema);

module.exports = Outfit;
