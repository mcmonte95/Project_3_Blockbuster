# Geostationary Satellite Visualization Project

## Group Members
- Michael Chiaramonte
- Liam O'Donovan
- Kaelan Purcell
- Eric Green

## Description
This project is dedicated to mapping and visualizing geostationary satellite data, leveraging NASA's API. Our objective is to create an interactive 3D globe visualization that dynamically displays the positions of geostationary satellites and their respective distances from Earth. The visualization will allow users to see the spatial distribution of these satellites, offering insights into global satellite coverage and space utilization.

## Project Tasks
1. **External Data Parsing:**
   - Source geostationary satellite data from NASA's API. Process and refine the data for visualization purposes.
   - **Data Source:** 
     - sscsw.py Package for accessing NASA's Satellite Situation Center (SSC) web services: [SSC Web Services](https://sscweb.gsfc.nasa.gov/WebServices/REST/)
   - **sscws.py Documentation:** 
     - [sscws Python Library](https://sscweb.gsfc.nasa.gov/WebServices/REST/py/sscws/index.html)
     - [sscws on PyPI](https://pypi.org/project/sscws/)

2. **Database Creation:** 
   - Develop a SQLite database to store and manage the satellite data effectively.

3. **API Development:** 
   - Create a Flask API to interface with the SQL database, ensuring smooth data retrieval and handling for the frontend.

4. **Frontend Development:** 
   - Design and implement the frontend using JavaScript (with WebGL or Three.js for 3D rendering), HTML, and CSS. This includes the development of the 3D interactive globe and the mechanisms to display satellite positions and distances from Earth.

    #### Library for 3D Globe Visualization
    - **globe.gl**: For creating and manipulating the 3D globe. This library is a convenience wrapper around the three-globe plugin, and uses ThreeJS/WebGL for 3D rendering: [Globe.gl](https://github.com/vasturiano/globe.gl)
    
## External Data Parsing and Database Creation (Found in the 'Resources' folder)

We used the `sscsw.py` package to interact with NASA's SSC web services and retrieve satellite data. This package simplifies the process of accessing the API. You can go to this [link](https://sscweb.gsfc.nasa.gov/WebServices/REST/py/GetStarted.html) for instructions on how to install it into your environment. API documentation is also linked above in the "Project Tasks" section.

Jupyter Notebook **'SSC_RESTful_API_Collection_notebook.ipynb'** was used to call the API and parse the data to gather what we needed. This data included satellite name, lat, long, distance from surface, and distance from center. We filtered the data to make sure that we are getting satellite objects no farther from earth than the distance of Earth to the Moon. The extracted data was saved to **'sat_locations.csv'**, which will be used to import the data into a SQLite database.

Jupyter Notebook **'SQLite_DB_create.ipynb'** was used to create our SQLite database **'SatelliteData.sqlite'** by reading **'sat_locations.csv'** into a dataframe, creating an engine to connect to the SQLite database, using metadata to create the correct table schema for our data, and finally using pandas 'to_sql' function to push that data into our database.

## API Developmenet

We then developed a Flask API called **'Satellite_API.py'** which connects to the SQLite database located in the **'Resources'** folder. This has one home route and a route called **'/satLocations'** which returns a jsonified dataframe of all the satellite data that we can now call in our javascript front end. 

## Front End Development (Currently found in the 'Front End' folder)

For the front end of our project we needed to use our API inside a javascript file in order to use that data to construct our globe. We rendered the globe with the **globe.gl** package. This is accomplished using the below files:

- **API_fetcher.js:**
  - This javascript file is specifically used to parse our API data correctly in order to extract all our satellite information

- **globeInit.js:**
  - This javascript file is used to actually create our globe. We actually import functions from 'API_fetcher.js' to use in this file
 
- **satellite_web_app.html**:
  - This HTML file is used to render everything in the browser. We import all our javascript files and their dependencies in the right order in order to get our globe to display.

**Important Note:** In order to get all these files to work together and have the web app load, you need to launch an HTTP server to get past the Cross-Origin Resource Sharing (CORS) policy. I suggest navigating to the web app directory and launching a python HTTP server with the command 'python -m http.server'.


