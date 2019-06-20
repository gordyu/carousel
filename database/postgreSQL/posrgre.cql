CREATE TABLE IF NOT EXISTS
homeinfo(
    propertyId SERIAL PRIMARY KEY,
    imageURL VARCHAR(240) NOT NULL,
    description VARCHAR(300) NOT NULL
);
copy homeinfo from '/mnt/f/sdc-team-2/carousel/database/data.csv'with (FORMAT CSV, FORCE_NULL(propertyid));

select * from homeinfo where propertyid = 9999999；

