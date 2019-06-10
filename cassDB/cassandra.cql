DROP KEYSPACE IF EXISTS home;

CREATE KEYSPACE home
  WITH REPLICATION = { 
   'class' : 'SimpleStrategy', 
   'replication_factor' : 1 
  };

USE home;

CREATE TABLE homeInfo (
  home_id INT,
  imageURL: TEXT,
  description: TEXT,
  PRIMARY KEY (home_id, rest_name, item_name)
);

