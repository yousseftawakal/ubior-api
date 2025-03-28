const express = require('express');
const router = express.Router();

const test = (req, res) => {
  res.send('Hello World');
};

router
  .route('/')
  .get(test) // get all reports
  .post(test); // create a new report

router
  .route('/:id')
  .get(test) // get report by id
  .patch(test) // update report by id
  .delete(test); // delete report by id

module.exports = router;
