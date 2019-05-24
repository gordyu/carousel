const axios = require('axios');

// function sum(a, b) {
//   return a + b;
// }

function fetchData() {
  axios.get('http://localhost:3004/homes', {
    params: {
      propertyId: ''
    }
  });
}
module.exports = fetchData;
