const {Schema, model} = require('../config/db-connection')

[{
  "_id": {
    "$oid": "6660f80159f0f7c2268988fa"
  },
  "mission_name": "Serenity",
  "launch_date": "7/19/2022",
  "destination": "Moon",
  "duration_days": 82
},
{
  "_id": {
    "$oid": "6660f80159f0f7c2268988fb"
  },
  "mission_name": "Impossible",
  "launch_date": "5/29/2024",
  "destination": "Mars",
  "duration_days": 211
},
{
  "_id": {
    "$oid": "6660f80159f0f7c2268988fc"
  },
  "mission_name": "ET",
  "launch_date": "7/2/2024",
  "destination": "International Space Station",
  "duration_days": 869
},
{
  "_id": {
    "$oid": "6660f80159f0f7c2268988fd"
  },
  "mission_name": "Juniper",
  "launch_date": "3/12/2024",
  "destination": "Jupiter",
  "duration_days": 146
},
{
  "_id": {
    "$oid": "6660f80159f0f7c2268988fe"
  },
  "mission_name": "Honorable",
  "launch_date": "3/15/2022",
  "destination": "Saturn",
  "duration_days": 685
},
{
  "_id": {
    "$oid": "6660f80159f0f7c2268988ff"
  },
  "mission_name": "Honor",
  "launch_date": "3/7/2023",
  "destination": "Neptune",
  "duration_days": 943
},
{
  "_id": {
    "$oid": "6660f80159f0f7c226898900"
  },
  "mission_name": "Firefly",
  "launch_date": "9/22/2024",
  "destination": "Venus",
  "duration_days": 8
},
{
  "_id": {
    "$oid": "6660f80159f0f7c226898901"
  },
  "mission_name": "MSL",
  "launch_date": "11/16/2024",
  "destination": "Mercury",
  "duration_days": 53
},
{
  "_id": {
    "$oid": "6660f80159f0f7c226898902"
  },
  "mission_name": "Mongo",
  "launch_date": "9/6/2023",
  "destination": "Uranus",
  "duration_days": 404
},
{
  "_id": {
    "$oid": "6660f80159f0f7c226898903"
  },
  "mission_name": "Drive",
  "launch_date": "8/4/2022",
  "destination": "Moon",
  "duration_days": 543
},
{
  "_id": {
    "$oid": "6660f80159f0f7c226898904"
  },
  "mission_name": "Rosie the Rocketer",
  "launch_date": "2/15/2025",
  "destination": "Mars",
  "duration_days": 224
},
{
  "_id": {
    "$oid": "6660f80159f0f7c226898905"
  },
  "mission_name": "Sunlight",
  "launch_date": "6/28/2022",
  "destination": "International Space Station",
  "duration_days": 978
},
{
  "_id": {
    "$oid": "6660f80159f0f7c226898906"
  },
  "mission_name": "Stars",
  "launch_date": "12/28/2025",
  "destination": "Jupiter",
  "duration_days": 431
},
{
  "_id": {
    "$oid": "6660f80159f0f7c226898907"
  },
  "mission_name": "Rings",
  "launch_date": "3/11/2024",
  "destination": "Saturn",
  "duration_days": 78
},
{
  "_id": {
    "$oid": "6660f80159f0f7c226898908"
  },
  "mission_name": "Curiosity",
  "launch_date": "7/19/2024",
  "destination": "Neptune",
  "duration_days": 259
},
{
  "_id": {
    "$oid": "6660f80159f0f7c226898909"
  },
  "mission_name": "Dream",
  "launch_date": "2/17/2025",
  "destination": "Venus",
  "duration_days": 844
},
{
  "_id": {
    "$oid": "6660f80159f0f7c22689890a"
  },
  "mission_name": "Eagle 5",
  "launch_date": "6/2/2025",
  "destination": "Mercury",
  "duration_days": 404
},
{
  "_id": {
    "$oid": "6660f80159f0f7c22689890b"
  },
  "mission_name": "Pioneer",
  "launch_date": "12/19/2024",
  "destination": "Uranus",
  "duration_days": 745
},
{
  "_id": {
    "$oid": "6660f80159f0f7c22689890c"
  },
  "mission_name": "Sputnik",
  "launch_date": "5/14/2022",
  "destination": "Moon",
  "duration_days": 292
},
{
  "_id": {
    "$oid": "6660f80159f0f7c22689890d"
  },
  "mission_name": "Juno",
  "launch_date": "12/30/2024",
  "destination": "Mars",
  "duration_days": 669
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