DROP KEYSPACE IF EXISTS home;

CREATE KEYSPACE home
  WITH REPLICATION = { 
   'class' : 'SimpleStrategy', 
   'replication_factor' : 3 
  };

USE home;
TRUNCATE home.homeinfo;(to clean up the data)

TRACING ON(timing);

CREATE TABLE home.homeInfo (propertyId INT PRIMARY KEY, imageURL TEXT, description TEXT);


COPY home.homeInfo (propertyId, description,imageURL)
TO '../homeInfo.csv' WITH HEADER = false;

 COPY home.homeInfo (propertyId, description, imageURL) FROM '/mnt/f/sdc-team-2/carousel/database/data.csv';