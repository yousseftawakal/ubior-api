const express = require('express');
const router = express.Router();

const test = (req, res) => {
  res.send('Hello World');
};

router.get('/', test); // get all posts
router.get('/:id', test); // get post by id

// Protect middleware

router.post('/', test); // create a new post
router.delete('/:id', test); // delete post by id

router.patch('/:id/like', test); // like post by id
router.patch('/:id/save', test); // save post by id
router.patch('/:id/report', test); // report post by id

// Admin middleware

router.get('/:id/reports', test); // get all reports for a post

module.exports = router;
