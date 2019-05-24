
const sum = require('./__test__/jestTestIt');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('checks data has the correct properties', done => {
  function callback(data) {
    expect(data).toHaveProperty('propertyId');
    expect(data).toHaveProperty('imageId');
    expect(data).toHaveProperty('description');
    done();
  }

  fetchData(callback);
});