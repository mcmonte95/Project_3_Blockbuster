-- Create table in Postgres db for satellites data
CREATE TABLE IF NOT EXISTS satellites (
    Satellite_Name VARCHAR(100) NOT NULL PRIMARY KEY,
    Latitude FLOAT NOT NULL,
    Longitude FLOAT NOT NULL,
    Distance_from_Earth_Center_km FLOAT NOT NULL,
    Distance_from_Earth_Surface_km FLOAT NOT NULL
);
