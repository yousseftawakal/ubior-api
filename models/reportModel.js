const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema(
  {
    reason: {
      type: String,
      required: [true, 'Please provide a reason.'],
    },
    post: {
      type: mongoose.Schema.ObjectId,
      ref: 'Post',
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

reportSchema.index({ post: 1, user: 1 }, { unique: true });

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
