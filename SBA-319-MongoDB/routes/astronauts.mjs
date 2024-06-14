import express from 'express';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb';

const router = express.Router();

// Get a single astronaut by id
router.get('/:id', async (req, res) => {
let collection = await db.collection('astronauts');
let query = {_id: new ObjectId(req.params.id) };
let result = await collection. findOne(query);
// If no result found
if (!result) {
res.send('Not Found').status(400);
} else {
res.send(result).status(200);
}
});

// Create a astronaut
router.post('/', async (req, res) => {
  try {
    const id = await db.collection('id');
    const newDocument = req.body;

    if (newDocument.astronaut_id) {
  
      newDocument.astronaut_id = newDocument.astronaut_id;
      delete newDocument.astronaut_id;
    }

    const result = await id.insertOne(newDocument);
    res.json(result).status(204);
  } catch (err) {
    res.send(err.message).status(err.status ? err.status : 400);
  }
});

// Astronaut's id data
router.get('/astronaut/:id', async (req, res) => {
  try {
    const id = await db.collection('id');
    const query = { astronaut_id: Number(req.params.id) };

    const result = await id.find(query).toArray();

    if (!result.length) {
      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    } else {
      res.json(result).status(200);
    }
  } catch (err) {
    res.send(err.message).status(err.status ? err.status : 400);
  }
});

// Delete a astronaut
router.delete('/astronaut/:id', async (req, res) => {
  let collection = await db.collection('id');
  let query = { astronaut_id: Number(req.params.id) };

  let result = await collection.deleteMany(query);

  if (!result) res.send('Not found').status(404);
  else res.send(result).status(200);
});


//Update a astronaut id
router.patch('/astronaut/:id', async (req, res) => {
  try {
    const id = await db.collection('id');
    const query = { astronaut_id: Number(req.params.id) };

    const result = await id.updateMany(query, {
      $set: { astronaut_id: req.body.astronaut_id },
    });

    if (!result) {
      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    } else {
      res.json(result).status(200);
    }
  } catch (err) {
    res.send(err.message).status(err.status ? err.status : 400);
  }
});

//************************************************* Missions **************************************************** */

// Get a Mission by id
router.get('/:id', async (req, res) => {
  let collection = await db.collection('mission');
  let query = {_id: new ObjectId(req.params.id) };
  let result = await collection. findOne(query);
  // If no result found
  if (!result) {
  res.send('Not Found').status(400);
  } else {
  res.send(result).status(200);
  }
  });
  
  // Create a mission
  router.post('/', async (req, res) => {
    try {
      const id = await db.collection('id');
      const newDocument = req.body;
  
      if (newDocument.mission_id) {
    
        newDocument.mission_id = newDocument.mission_id;
        delete newDocument.mission_id;
      }
  
      const result = await id.insertOne(newDocument);
      res.json(result).status(204);
    } catch (err) {
      res.send(err.message).status(err.status ? err.status : 400);
    }
  });
  
  // Mission's id data
  router.get('/mission/:id', async (req, res) => {
    try {
      const id = await db.collection('id');
      const query = { astronaut_id: Number(req.params.id) };
  
      const result = await id.find(query).toArray();
  
      if (!result.length) {
        const err = new Error('Not Found');
        err.status = 404;
        throw err;
      } else {
        res.json(result).status(200);
      }
    } catch (err) {
      res.send(err.message).status(err.status ? err.status : 400);
    }
  });
  
  // Delete a mission
  router.delete('/mission/:id', async (req, res) => {
    let collection = await db.collection('id');
    let query = { mission_id: Number(req.params.id) };
  
    let result = await collection.deleteMany(query);
  
    if (!result) res.send('Not found').status(404);
    else res.send(result).status(200);
  });
  
  
  //Update a mission id
  router.patch('/mission/:id', async (req, res) => {
    try {
      const id = await db.collection('id');
      const query = { mission_id: Number(req.params.id) };
  
      const result = await id.updateMany(query, {
        $set: { mission_id: req.body.mission_id },
      });
  
      if (!result) {
        const err = new Error('Not Found');
        err.status = 404;
        throw err;
      } else {
        res.json(result).status(200);
      }
    } catch (err) {
      res.send(err.message).status(err.status ? err.status : 400);
    }
  });

  //*********************************************** Spaceships ************************************************** */

// Get a spaceship by id
router.get('/:id', async (req, res) => {
  let collection = await db.collection('spaceship');
  let query = {_id: new ObjectId(req.params.id) };
  let result = await collection. findOne(query);
  // If no result found
  if (!result) {
  res.send('Not Found').status(400);
  } else {
  res.send(result).status(200);
  }
  });
  
  // Create a spaceship
  router.post('/', async (req, res) => {
    try {
      const id = await db.collection('id');
      const newDocument = req.body;
  
      if (newDocument.spaceship_id) {
    
        newDocument.spaceship_id = newDocument.spaceship_id;
        delete newDocument.spaceship_id;
      }
  
      const result = await id.insertOne(newDocument);
      res.json(result).status(204);
    } catch (err) {
      res.send(err.message).status(err.status ? err.status : 400);
    }
  });
  
  // Spaceship's id data
  router.get('/spaceship/:id', async (req, res) => {
    try {
      const id = await db.collection('id');
      const query = { spaceship_id: Number(req.params.id) };
  
      const result = await id.find(query).toArray();
  
      if (!result.length) {
        const err = new Error('Not Found');
        err.status = 404;
        throw err;
      } else {
        res.json(result).status(200);
      }
    } catch (err) {
      res.send(err.message).status(err.status ? err.status : 400);
    }
  });
  
  // Delete a spaceship
  router.delete('/spaceship/:id', async (req, res) => {
    let collection = await db.collection('id');
    let query = { spaceship_id: Number(req.params.id) };
  
    let result = await collection.deleteMany(query);
  
    if (!result) res.send('Not found').status(404);
    else res.send(result).status(200);
  });
  
  
  //Update a Spaceship
  router.patch('/spaceship/:id', async (req, res) => {
    try {
      const id = await db.collection('id');
      const query = { spaceship_id: Number(req.params.id) };
  
      const result = await id.updateMany(query, {
        $set: { spaceship_id: req.body.spaceship_id },
      });
  
      if (!result) {
        const err = new Error('Not Found');
        err.status = 404;
        throw err;
      } else {
        res.json(result).status(200);
      }
    } catch (err) {
      res.send(err.message).status(err.status ? err.status : 400);
    }
  });

export default router;




// router.get('/:id', async (req, res) => {
//   let id;
//   try {
//     id = new ObjectId(req.params.id);
//   } catch (e) {
//     res.status(400).send({
//     error: 'Please send a valid ObjectId',
//     });
//     return;
//   }
