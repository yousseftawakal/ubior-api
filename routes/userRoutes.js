const express = require('express');
const router = express.Router();

const test = (req, res) => {
  res.send('Hello World');
};

router.post('/signup', test);
router.post('/login', test);
router.get('/logout', test);

router.post('/forgotPassword', test);
router.patch('/resetPassword/:token', test);

router.get('/:username', test); // get user by username

// Protect middleware

router.get('/me', test);
router.patch('/updateMe', test);
router.patch('/updateMyPassword', test);
router.delete('/deleteMe', test);

// Admin middleware

router
  .route('/')
  .get(test) // get all users
  .post(test); // create a new user

router
  .route('/:username')
  .patch(test) // update user by username
  .delete(test); // delete user by username

module.exports = router;
