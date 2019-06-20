
const Home = require('./index');
const generator = require('../generator.js')



Home.deleteMany({}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('database cleared');
    console.log(`Starting Database seeding at ${Date()}`)

    Home.insertMany(generator.data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Database seeding completed at ${Date()}`);

      }
    });
  }
});
