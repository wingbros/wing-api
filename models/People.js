const mongoose = require('mongoose');

const PeopleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  instagram: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other']
  },
  interested_in: {
    type: String,
    required: true,
    enum: ['males', 'females', 'both']
  },
  photo_url: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  collection: 'people'
});

module.exports = mongoose.model('People', PeopleSchema); 