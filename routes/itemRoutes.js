const express = require('express');
const router = express.Router();

const test = (req, res) => {
  res.send('Hello World');
};

// Protect middleware

router
  .route('/')
  .get(test) // get all items
  .post(test) // create a new item
  .patch(test); // add items to wardrobe

router
  .route('/:id')
  .get(test) // get item by id
  .patch(test) // update item by id
  .delete(test); // delete item by id

module.exports = router;
