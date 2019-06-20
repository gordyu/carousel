const cassandra = require('cassandra-driver');
const generator = import('./generator.js');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1: 9042'],localDataCenter: 'datacenter1', keyspace: 'system'});
client.connect((err) => {
    if (err) {
      console.log(err);
    }
  });
(async function start() {

    await client.execute("DROP KEYSPACE IF EXISTS home").then(async () => {
      console.log('dropped home');
      await client.execute("CREATE KEYSPACE IF NOT EXISTS home WITH replication = {'class':'SimpleStrategy', 'replication_factor':2}").then(() => {
        console.log('created keyspace home')
        client.execute("USE home", function () {
          console.log('switched to keyspace home');
  
        });
      }).then(async () => {
        await seed()
        await client.shutdown().then(() => {
          console.log('cassandra connection shut down')
        })
        .catch((err) {
          console.log(err)
      })
    })
  })()


//
async function seed() {
    await client.execute('CREATE TABLE home.homeInfo (home_id  INT PRIMARY KEY, imageURL TEXT, description TEXT )');
    // console.time('clock')
    
    var size = 43
    for (var i = 0; i < 10000000 / size; i++) {
      var batch = [];
      for (var j = 0; j < size; j++) {
        var data = generator.seeds(i * size + j);
        batch.push({ query: 'INSERT INTO home.homeInfo JSON ?', params: [JSON.stringify(data)] })
        await client.execute('INSERT INTO home.homeInfo JSON ?;', [JSON.stringify(data)]);
  
      }
      await client.batch(batch);
       console.log(i);
    }
    // console.timeEnd('clock')
  }
//

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
}
