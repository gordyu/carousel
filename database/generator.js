const faker = require('faker');
const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, '/data.csv');


generate = (id) => {
  let homeInfo = {};

  homeInfo.propertyId = id,
  homeInfo.imageURL= `https://s3-us-west-1.amazonaws.com/propimage55/${id}.webp`,
  homeInfo.description= faker.lorem.sentence()

  return homeInfo;
};

console.log(`Creating data.csv file at ${Date()}`);
fs.writeFile(filepath, '', (err) => {
  if (err){
    console.log(`Error creating data.csv file: ${err}`);
    return;
  }
  console.log(`Successfully created data.csv at ${Date()}`);
  console.log(`Opening data.csv file at ${Date()}`);
  fs.open(filepath,'r+', (err, fd) => {
    if(err){
      console.log(`Error opening document`);
      return;
    }
    let limit = 10000000;
    // let limit = 10;

    console.log(`Successfully opened data.csv file at ${Date()}`);
    console.log(`Creating ${limit} rows for data.csv file at ${Date()}`);
    let writeHome = function(count) {
      if(count >= limit){
        console.log(`Successfully generated ${count} rows at ${Date()}`);
        return;
      }
      let {propertyId, imageURL, description} = generate(count);
      fs.write(fd, `${propertyId},${imageURL},${description}\n`, (err) => {
        if(err){
          console.log(`Error writting row ${count}: ${err}`);
          return;
        }
        writeHome(count + 1);
      });
    }
    writeHome(0);
  });
});