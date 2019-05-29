const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const mongoose = require('mongoose');

describe('Testing the Database', () => {

  before('connect', () => {
    return mongoose.createConnection('mongodb://localhost/homes');
  });

  it('should list all homes available', (done) => {
    let url = 'http://localhost:3004/homes';
    request.get(url, (error, response, body) => {
      let bod = JSON.parse(body);
      let item = bod[0];

      expect(item).to.have.property('propertyId');
      expect(item).to.have.property('imageId');
      expect(item).to.have.property('description');
      expect(item).to.be.an('object');
      expect(bod).to.be.an('array');
      // This is intentionally limited to 5 of 100
      expect(bod.length).to.equal(5);
      done();
    });
  });
});

// Note: My service does NOT require anything but a request for data.