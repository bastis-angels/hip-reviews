const express = require('express');

const port = 3000;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('../database/sequelize.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));


// get all reviews for a specific location
app.get('/reviews/location/:loc_id/', (req, res) => {
  // sequelize.findReviews(req.params.loc_id, (reviews) => {
  //   console.log(reviews)
  //   res.send(reviews);
  // });

  sequelize.db.query(`SELECT * FROM reviews INNER JOIN users on (reviews.loc_id = 
    ${req.params.loc_id} && users.user_id = reviews.user_id)`).then(result => res.send(result[0]));
});

// get images for each reviews
// get images seperately to optimize my rendering
app.get('/reviews/review/:review_id/images/', (req, res) => {
  sequelize.findImages(req.params.review_id, (reviews) => {
    res.send(reviews);
  });
});

app.listen(port, () => console.log(`Listening to port ${port}`));
