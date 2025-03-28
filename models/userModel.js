const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: [50, 'Name must be 50 characters at most.'],
    },
    username: {
      type: String,
      required: [true, 'Please provide a username.'],
      unique: [true, 'Already used username.'],
      maxlength: [50, 'Username must be 50 characters at most.'],
      match: [/^(?!\.)(?!.*\.$)[a-zA-Z0-9_.]+$/, 'Username invalid format.'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email address.'],
      unique: [true, 'Already used email address.'],
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email address.'],
    },
    country: {
      type: String,
      required: [true, 'Please provide your country.'],
    },
    photo: {
      type: String,
      default: 'default.png',
    },
    bio: {
      type: String,
      maxlength: [100, 'Bio must be 100 characters at most.'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    private: {
      type: Boolean,
      default: false,
    },
    items: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Item',
      },
    ],
    followers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
    following: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
    password: {
      type: String,
      required: [true, 'Please provide a password.'],
      minlength: [8, 'Password must be 8 characters at least.'],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password.'],
      validate: {
        validator: function (e) {
          return e === this.password;
        },
        message: 'Passwords do not match.',
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual('closets', {
  ref: 'Closet',
  foreignField: 'user',
  localField: '_id',
});

userSchema.virtual('outfits', {
  ref: 'Outfit',
  foreignField: 'user',
  localField: '_id',
});

userSchema.virtual('posts', {
  ref: 'Post',
  foreignField: 'user',
  localField: '_id',
});

const User = mongoose.model('User', userSchema);

module.exports = User;
