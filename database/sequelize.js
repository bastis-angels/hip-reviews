const  user = require('./info.js');
const Sequelize = require('sequelize');

let db = new Sequelize('user_reviews', user.username, user.password, {
    dialect: 'mysql'
});

let User = db.define('users', {
    user_id: {type:Sequelize.INTEGER, primaryKey: true,  autoIncrement: true },
    name: Sequelize.STRING,
    avatar: Sequelize.STRING
});

let Location = db.define('locations', {
    loc_id: {type:Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    loc_name: Sequelize.STRING
});

let Review = db.define('reviews', {
    review_id: {type:Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: {type:Sequelize.INTEGER },
    loc_id: {type:Sequelize.INTEGER },
    context: Sequelize.STRING
});

let Image = db.define('images', {
    image_id: {type:Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    review_id:  {type:Sequelize.INTEGER, primaryKey: true},
    image_url: Sequelize.STRING,
    image_description: Sequelize.STRING
});

let saveLocation = (data) => {
    Location.sync()
    .then(function() {
      // Now instantiate an object and save it:
      return Location.create(data);
    })
    .catch(function(err) {
      // Handle any error in the chain
      console.error(err);
      db.close();
    });
}

let saveUser = (data) => {
    User.sync()
    .then(function() {
      // Now instantiate an object and save it:
      return User.create(data);
    })
    .catch(function(err) {
      // Handle any error in the chain
      console.error(err);
      db.close();
    });
}

let saveReview = (data) => {
    Review.sync()
    .then(function() {
      // Now instantiate an object and save it:
      return Review.create(data);
    })
    .catch(function(err) {
      // Handle any error in the chain
      console.error(err);
      db.close();
    });
}

let saveImage = (data) => {
    Image.sync()
    .then(function() {
      // Now instantiate an object and save it:
      return Image.create(data);
    })
    .catch(function(err) {
      // Handle any error in the chain
      console.error(err);
      db.close();
    });
}

module.exports = {
    saveLocation: saveLocation,
    saveUser: saveUser,
    saveReview: saveReview,
    saveImage: saveImage
  };