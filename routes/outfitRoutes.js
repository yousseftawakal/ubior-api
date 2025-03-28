const express = require('express');
const router = express.Router();

const test = (req, res) => {
  res.send('Hello World');
};

// Protect middleware

router
  .route('/')
  .get(test) // get all outfits
  .post(test); // create a new outfit

router
  .route('/:id')
  .get(test) // get outfit by id
  .patch(test) // update outfit by id
  .delete(test); // delete outfit by id

module.exports = router;
