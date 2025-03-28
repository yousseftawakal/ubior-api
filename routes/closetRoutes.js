const express = require('express');
const router = express.Router();

const test = (req, res) => {
  res.send('Hello World');
};

// Protect middleware

router
  .route('/')
  .get(test) // get all closets
  .post(test); // create a new closet

router
  .route('/:id')
  .get(test) // get closet by id
  .patch(test) // update closet by id
  .delete(test); // delete closet by id

module.exports = router;
