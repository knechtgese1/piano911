const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const musicianSchema = new mongoose.Schema({
  username: String,
  first: String,
  last: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: Number,
  instrument: [{
    inst: String,
    proficiency: String
  }],
  bio: String,
  education: [{
    type: String,
    field: String,
    school: String,
    complete: Boolean,
    year: Number
  }],
  rate: {
    amount: Number,
    time: String
  },
  samples: [{
    url: String,
  }],
  styles: [String],
  reviews: [{
    rating: Number,
    user:
    review: String,
  }],
  location: {
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
  }
},
{
  timestamps: true
}
);

const Musician = mongoose.model('Blog', musicianSchema);

module.exports = Musician;