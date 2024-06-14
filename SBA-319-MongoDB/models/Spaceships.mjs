const {Schema, model} = require('../config/db-connection')

[{
  "_id": {
    "$oid": "6660fb4459f0f7c22689890f"
  },
  "ship_name": "Nebuchadnezzar",
  "ship_class": "Carrier",
  "crew_size": 11,
  "max_speed": 23505.45
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c226898910"
  },
  "ship_name": "Spaceship of the Imagination",
  "ship_class": "Destroyer",
  "crew_size": 3,
  "max_speed": 16538.68
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c226898911"
  },
  "ship_name": "SDF-1 Macross\"",
  "ship_class": "Battleship",
  "crew_size": 6,
  "max_speed": 12260.6
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c226898912"
  },
  "ship_name": "Milano",
  "ship_class": "Destroyer",
  "crew_size": 7,
  "max_speed": 14250.3
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c226898913"
  },
  "ship_name": "Space Ship",
  "ship_class": "Destroyer",
  "crew_size": 9,
  "max_speed": 10301.56
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c226898914"
  },
  "ship_name": "Bebop",
  "ship_class": "Frigate",
  "crew_size": 6,
  "max_speed": 14929.82
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c226898915"
  },
  "ship_name": "The Big One",
  "ship_class": "Frigate",
  "crew_size": 5,
  "max_speed": 14738.99
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c226898916"
  },
  "ship_name": "Planet Express Ship",
  "ship_class": "Frigate",
  "crew_size": 16,
  "max_speed": 2203.57
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c226898917"
  },
  "ship_name": "Starman",
  "ship_class": "Destroyer",
  "crew_size": 20,
  "max_speed": 16353.49
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c226898918"
  },
  "ship_name": "Cowboy",
  "ship_class": "Battleship",
  "crew_size": 10,
  "max_speed": 16131.38
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c226898919"
  },
  "ship_name": "Nimbus",
  "ship_class": "Cruiser",
  "crew_size": 6,
  "max_speed": 5766.91
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c22689891a"
  },
  "ship_name": "SS Anne Droid",
  "ship_class": "Battleship",
  "crew_size": 8,
  "max_speed": 6081.97
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c22689891b"
  },
  "ship_name": "The Dark Star",
  "ship_class": "Frigate",
  "crew_size": 15,
  "max_speed": 11275.16
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c22689891c"
  },
  "ship_name": "Space Ball",
  "ship_class": "Destroyer",
  "crew_size": 20,
  "max_speed": 14690.52
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c22689891d"
  },
  "ship_name": "Bullet",
  "ship_class": "Carrier",
  "crew_size": 3,
  "max_speed": 5996.24
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c22689891e"
  },
  "ship_name": "Starship",
  "ship_class": "Cruiser",
  "crew_size": 3,
  "max_speed": 8356.91
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c22689891f"
  },
  "ship_name": "Star Lord",
  "ship_class": "Frigate",
  "crew_size": 3,
  "max_speed": 9498.74
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c226898920"
  },
  "ship_name": "Tardis",
  "ship_class": "Frigate",
  "crew_size": 13,
  "max_speed": 17557.56
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c226898921"
  },
  "ship_name": "Millenium Pigeon",
  "ship_class": "Cruiser",
  "crew_size": 11,
  "max_speed": 9039.76
},
{
  "_id": {
    "$oid": "6660fb4459f0f7c226898922"
  },
  "ship_name": "Benatar",
  "ship_class": "Destroyer",
  "crew_size": 4,
  "max_speed": 24338.56
}]

// const userSchema = new Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true,
//     unique: true
//   }, 
//   age: {
//     type: Number,
//     required: true,
//     min: 18,
//     max: 120
//   }
// });

// // You can add pre hooks to your schema right here

module.exports = model('User', userSchema)