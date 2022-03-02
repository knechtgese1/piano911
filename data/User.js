const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

// this will be unacceptable in the actual version for storing and verifying passwords, but will work for development

const userSchema = new mongoose.Schema({
  username: String,
  password: String
})