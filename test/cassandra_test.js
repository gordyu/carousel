const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1: 9042'],localDataCenter: 'datacenter1', keyspace: 'system'});
client.connect((err) => {
    if (err) {
      console.log(err);
    }
  });


var start_
//



