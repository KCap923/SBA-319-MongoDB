const {Schema, model} = require('../config/db-connection')


const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  }, 
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 120
  }
});

// You can add pre hooks to your schema right here

module.exports = model('User', userSchema)