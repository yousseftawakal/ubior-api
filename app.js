const express = require('express');
const app = express();

const userRouter = require('./routes/userRoutes');
const itemRouter = require('./routes/itemRoutes');
const outfitRouter = require('./routes/outfitRoutes');
const closetRouter = require('./routes/closetRoutes');
const postRouter = require('./routes/postRoutes');
const reportRouter = require('./routes/reportRoutes');

app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/items', itemRouter);
app.use('/api/v1/outfits', outfitRouter);
app.use('/api/v1/closets', closetRouter);
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/reports', reportRouter);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
