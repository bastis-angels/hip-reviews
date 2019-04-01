
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
  for (let x = 1; x < Math.floor(Math.random() * Math.floor(15)); x += 1) {
    // save each user to users table in user_reviews database
    sequelize.saveUser({
      name: faker.name.findName(),
      avatar: '',
    });
    // save each review to reviews table in user_reviews database
    sequelize.saveReview({
      user_id: x,
      loc_id: i,
      context: faker.lorem.sentence(),
      helpful: Math.floor(Math.random() * Math.floor(10)),
    });
    // generate random number of images for each review
    for (let y = 1; y < Math.floor(Math.random() * Math.floor(5)); y += 1) {
    // save each image for each review in images table in user_reviews database
      sequelize.saveImage({
        review_id: x,
        image_description: faker.lorem.sentences(),
        image_url: '',
      });
    }
  }
}
