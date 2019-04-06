
const faker = require('faker');
const sequelize = require('./sequelize.js');

// // generate locations data
for (let i = 1; i < 100; i += 1) {
// save each location to locations table in user_reviews database
  sequelize.saveLocation({
    loc_id: i,
    loc_name: faker.address.city(),
  });
  // generate random number of reviews and user for each location
  for (let x = 1; x < Math.floor(Math.random() * Math.floor(15) + 5); x += 1) {
    // save each user to users table in user_reviews database
    const avatarId = Math.floor(Math.random() * 9) + 1;
    sequelize.saveUser({
      name: faker.name.findName(),
      avatar: `https://s3.us-east-2.amazonaws.com/bastis-camp-reviews-photos/avatars/${avatarId}.png`,
    });
    // save each review to reviews table in user_reviews database
    sequelize.saveReview({
      user_id: x,
      loc_id: i,
      context: faker.lorem.sentences(),
      helpful: Math.floor(Math.random() * Math.floor(10)),
    });
    // generate random number of images for each review
    // save each image for each review in images table in user_reviews database
    const imgId = Math.floor(Math.random() * 10) + 1;
    sequelize.saveImage({
      review_id: x,
      image_description: faker.lorem.sentences(),
      image_url: `https://s3.us-east-2.amazonaws.com/bastis-camp-reviews-photos/review-img/${imgId}.jpg`,
    });
  }
}
