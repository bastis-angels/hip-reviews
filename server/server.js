const express = require('express');

const port = 3000;
const app = express();
const sequelize = require('../database/sequelize.js');
// get all reviews for a specific location
app.get('/reviews/location/:loc_id/', (req, res) => {
  sequelize.findReviews(req.params.loc_id, (reviews) => {
    res.send(reviews);
  });
});
// get images for each reviews
// get images seperately to optimize my rendering
app.get('/reviews/review/:review_id/images/', (req, res) => {
  sequelize.findImages(req.params.review_id, (reviews) => {
    res.send(reviews);
  });
});

app.listen(port);
