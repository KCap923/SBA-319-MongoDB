const { Schema, model } = require('../config/db-connection');

[{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988e5"
  },
  "astronaut_id": 1,
  "first_name": "Nadya",
  "last_name": "Lockhart",
  "birthdate": "1/1/1997",
  "nationality": "Portugal"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988e6"
  },
  "astronaut_id": 2,
  "first_name": "Thorstein",
  "last_name": "Bondesen",
  "birthdate": "7/4/1983",
  "nationality": "Syria"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988e7"
  },
  "astronaut_id": 3,
  "first_name": "Clari",
  "last_name": "Bent",
  "birthdate": "3/13/1992",
  "nationality": "Mongolia"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988e8"
  },
  "astronaut_id": 4,
  "first_name": "Allan",
  "last_name": "Vasiliu",
  "birthdate": "7/20/1990",
  "nationality": "Colombia"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988e9"
  },
  "astronaut_id": 5,
  "first_name": "Grantham",
  "last_name": "Jouannisson",
  "birthdate": "2/13/1987",
  "nationality": "China"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988ea"
  },
  "astronaut_id": 6,
  "first_name": "Kristin",
  "last_name": "Lynn",
  "birthdate": "2/1/1990",
  "nationality": "China"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988eb"
  },
  "astronaut_id": 7,
  "first_name": "Seka",
  "last_name": "Kaiser",
  "birthdate": "3/26/1995",
  "nationality": "Brazil"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988ec"
  },
  "astronaut_id": 8,
  "first_name": "Justis",
  "last_name": "Bernocchi",
  "birthdate": "3/17/1989",
  "nationality": "Indonesia"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988ed"
  },
  "astronaut_id": 9,
  "first_name": "Willis",
  "last_name": "Earsman",
  "birthdate": "6/24/1981",
  "nationality": "China"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988ee"
  },
  "astronaut_id": 10,
  "first_name": "Evered",
  "last_name": "Torrecilla",
  "birthdate": "2/2/1992",
  "nationality": "Greece"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988ef"
  },
  "astronaut_id": 11,
  "first_name": "Rosina",
  "last_name": "Clout",
  "birthdate": "8/18/1998",
  "nationality": "Cambodia"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988f0"
  },
  "astronaut_id": 12,
  "first_name": "Verile",
  "last_name": "Mabbe",
  "birthdate": "12/21/1998",
  "nationality": "Micronesia"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988f1"
  },
  "astronaut_id": 13,
  "first_name": "Nevil",
  "last_name": "Ockleshaw",
  "birthdate": "8/2/1988",
  "nationality": "China"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988f2"
  },
  "astronaut_id": 14,
  "first_name": "Dorie",
  "last_name": "Lamborn",
  "birthdate": "2/8/1982",
  "nationality": "United Kingdom"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988f3"
  },
  "astronaut_id": 15,
  "first_name": "La verne",
  "last_name": "Janusz",
  "birthdate": "12/24/1991",
  "nationality": "Russia"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988f4"
  },
  "astronaut_id": 16,
  "first_name": "Etty",
  "last_name": "Richt",
  "birthdate": "9/20/1992",
  "nationality": "Mexico"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988f5"
  },
  "astronaut_id": 17,
  "first_name": "Sibilla",
  "last_name": "Hulme",
  "birthdate": "11/2/1991",
  "nationality": "Namibia"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988f6"
  },
  "astronaut_id": 18,
  "first_name": "Elaina",
  "last_name": "Stansbury",
  "birthdate": "7/7/1989",
  "nationality": "Philippines"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988f7"
  },
  "astronaut_id": 19,
  "first_name": "Yvon",
  "last_name": "Goodson",
  "birthdate": "9/18/1981",
  "nationality": "Portugal"
},
{
  "_id": {
    "$oid": "6660f6cc59f0f7c2268988f8"
  },
  "astronaut_id": 20,
  "first_name": "Torrey",
  "last_name": "Skittles",
  "birthdate": "4/1/1980",
  "nationality": "Indonesia"
}]

// const astroSchema = Schema({
//   id: {
//     type: Number,
//     required: true,
//     unique: true,
//   },
//   firstName: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   lasttName: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//     firstName: {
//       type: String,
//       required: true,
//       unique: true,
//     }
// });

module.exports = model('Astronaut', astroSchema);

