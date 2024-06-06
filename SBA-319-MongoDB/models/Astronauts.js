const { Schema, model } = require('../config/db-connection');

const astroSchema = Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  lasttName: {
    type: String,
    required: true,
    unique: true,
  },
    firstName: {
      type: String,
      required: true,
      unique: true,
    }
});

module.exports = model('Astronaut', astroSchema);
