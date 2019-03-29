var express = require('express')
var app = express()
var faker = require('faker');

app.get('/', function (req, res) {

  res.send({
      location: locations,
      users: users,
      reviews: reviews,
      images: images

  })
})
 
app.listen(3000, () => {
    console.log('listening')
});



let reviews = [];
let users = [];
let images = [];
let locations = [];

//generate locations data
for(let i = 1; i < 100; i++) {
    //insert each location to locations array
    locations.push({
        loc_id: i,
        loc_name: faker.address.city(),
    })
    //generate random number of reviews and user for each location
    for(let x = 1; x <  Math.floor(Math.random() * Math.floor(5)); x++) {
        //push each review to reviews array
        reviews.push({
            review_id: x,
            user_id: x,
            loc_id: i,
            content: faker.lorem.sentences(),
            helpful: Math.floor(Math.random() * Math.floor(5))
        })
        //push each user to users array
        users.push({
            user_id: x,
            username: faker.name.findName(),
            avatar: faker.image.imageUrl()
        })
       //generate random number of images for each review
       for(let y = 1; y <  Math.floor(Math.random() * Math.floor(5)); y++) {
            //push each image to images array
            images.push({
               image_id: y,
               review_id: x,
               image_description: faker.lorem.sentences(),
               image_url: faker.image.imageUrl()
            })
       }

    }
}
