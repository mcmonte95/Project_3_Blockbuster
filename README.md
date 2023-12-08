# Geostationary Satellite Visualization Project

## Group Members
- Michael Chiaramonte
- Liam O'Donovan
- Kaelan Purcell
- Eric Green

## Description
This project is dedicated to mapping and visualizing geostationary satellite data, leveraging NASA's API. Our objective is to create an interactive 3D globe visualization that dynamically displays the positions of geostationary satellites and their respective distances from Earth. The visualization will allow users to see the spatial distribution of these satellites, offering insights into global satellite coverage and space utilization.

## Project Tasks
1. **Data Sourcing and Parsing:**
   - Source geostationary satellite data from NASA's API. Process and refine the data for visualization purposes.
   - **Data Source:** 
     - sscsw.py Package for accessing NASA's Satellite Situation Center (SSC) web services: [SSC Web Services](https://sscweb.gsfc.nasa.gov/WebServices/REST/)
   - **sscws.py Documentation:** 
     - [sscws Python Library](https://sscweb.gsfc.nasa.gov/WebServices/REST/py/sscws/index.html)
     - [sscws on PyPI](https://pypi.org/project/sscws/)

2. **Database Creation:** 
   - Develop a SQL database to store and manage the satellite data effectively.

3. **API Development:** 
   - Create a Flask API to interface with the SQL database, ensuring smooth data retrieval and handling for the frontend.

4. **Frontend Development:** 
   - Design and implement the frontend using JavaScript (with WebGL or Three.js for 3D rendering), HTML, and CSS. This includes the development of the 3D interactive globe and the mechanisms to display satellite positions and distances from Earth.

    ### Recommended Libraries for 3D Globe Visualization
    - **Three.js**: For creating and manipulating the 3D globe.
    - **D3.js**: To assist in data-driven transformations and visualizations.
    - **WebGL**: For rendering interactive 3D graphics.
    - **Leaflet.js**: To provide additional mapping functionalities if needed.
    - **Turf.js**: For advanced geospatial processing and data manipulation.
  
## Data Sourcing and Parsing

We used the `sscsw.py` package to interact with NASA's SSC web services and retrieve satellite data. This package simplifies the process of accessing the API. You can go to this [link](https://sscweb.gsfc.nasa.gov/WebServices/REST/py/GetStarted.html) for instructions on how to install it into your environment. API documentation is also linked above in the "Project Tasks" section.

Jupyter Notebook **SSC_RESTful_API_Collection_notebook.ipynb** was used to call the API and parse the data to gather what we needed. We filtered the data to make sure that we are getting satellite objects no farther from earth than the distance of Earth to the Moon. The extracted data was saved to **sat_locations.csv**, which will be used to import the data into a PostgreSQL database.

