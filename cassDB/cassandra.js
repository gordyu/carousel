const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1:9042'], keyspace: 'homeImgs'});
client.connect()
.then(x => console.log('connected '))
.catch(err => console.log('err at connection ', err));