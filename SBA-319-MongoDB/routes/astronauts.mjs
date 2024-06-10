import express from 'express';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb';

const router = express.Router();

// Get a single astronaut by id
router.get('./:id', async (req, res) => {
let id;
try {
  id = new ObjectId(req.params.id);
} catch (e) {
  res.status(400).send({
  error: 'Please send a valid ObjectId',
  });
  return;
}

let collection = await db.collection('astronaut');
let query = {_id: id };
let result = await collection.findOne(query);

if (!result) {
res.send('Not Found').status(400);
} else {
res.send(result).status(200);
}
});






export default router



