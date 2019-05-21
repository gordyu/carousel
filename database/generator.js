
const Home = require('./index');
const faker = require('faker');

let seeds = [];

for (var i = 0; i < 100; i++) {
  seeds.push(Home({
    propertyId: faker.random.number(),
    imageId: faker.random.number(),
    description: faker.lorem.sentence()
  }));
}

Home.deleteMany({}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('database cleared');
    Home.insertMany(seeds, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('database seeded!') 
        Home.find({}, (err, result) => {
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
