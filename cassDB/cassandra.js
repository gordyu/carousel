const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1: 9042'], keyspace: 'home'});
client.connect()
.then(x => console.log('connected '))
.catch(err => console.log('err at connection ', err))



// - GET -
const getAllHomeInfos = (propertyId) => {
const query = `SELECT * FROM home.homeInfo WHERE home_id = ? `;
  return client.execute(query, [propertyId], { prepare: true });
}


// // - POST -
const insertHomeInfo = params => {
  const query = `INSERT INTO home.homeInfo (
    home_id, imageURL, description)
    VALUES (?, ?,  ?);`;
  return client.execute(query, params, { prepare: true });
};

// - PUT -
const editHomeInfo = paramsObj => {
  const query = `UPDATE home.homeInfo SET ${Object.keys(paramsObj.request)[0]} = ${paramsObj.request.homeInfo_body} WHERE home_id = ${paramsObj.home_id} ;`;
  return  client.execute(query);
};

// // - DELETE - 
const deleteHomeInfo = params => {
  const query = `DELETE FROM home.homeInfo WHERE home_id = ?;`;
  return client.execute(query, [params.home_id], { prepare: true });
};

module.exports = {
    getAllHomeInfos,
    insertHomeInfo,
    editHomeInfo,
    deleteHomeInfo
};