
const Home = require('./index');
const faker = require('faker');

let seeds = [];

for (var i = 0; i < 43; i++) {
  seeds.push(Home.Home({
    // propertyId: faker.random.number(),
    propertyId: i,
    imageURL: `https://s3-us-west-1.amazonaws.com/propimage55/${i}.webp`,
    description: faker.lorem.sentence()
  }));
}

Home.Home.deleteMany({}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('database cleared');
    Home.Home.insertMany(seeds, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('database seeded!') 
        Home.Home.find({}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
      }
    });
  }
});
