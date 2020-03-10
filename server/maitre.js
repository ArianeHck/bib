const maitre = require('maitre');

const restaurants = maitre.get();

restaurants.forEach(restaurant => {
  console.log(restaurant.name);
})