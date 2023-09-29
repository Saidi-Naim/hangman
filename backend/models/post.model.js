const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    hours: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('post', postSchema, 'rdv');
