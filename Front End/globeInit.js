// globeInit.js

// Importing functions from API_fetcher.js
import { callApi, processData } from './API_fetcher.js';

// Constants to make satellites have a better relative size compared to the globe
const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 100; // km

// Function that takes the API data and sets up the globe object
function initializeGlobe(processedData) {
    
    // Construct gData using the data from API_fetcher
    const gData = processedData.latitudes.map((lat, index) => ({
        lat: lat,
        lng: processedData.longitudes[index],
        size: processedData.distancesFromEarthCenter[index] / 20000, // Additional scaling applpied make relative height look better on the page
        color: 'blue',
        name: processedData.satelliteNames[index]
    }));

    // Initialize the globe and store it in 'world'. This is where any additional globe object settings can be coded.
    const world = Globe()
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .objectsData(gData)
        .objectAltitude('size')
        .objectLabel('name')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        (document.getElementById('globeViz')); //This is how we link this object to the div tag in the HTML file

    // Return the globe object 
    return world;
}

// Function that can help create a custom 3D object for each satellite using the Three.js library. This object will be a simple cyllinder and 2 rectangular panels
function createSatellite(world) {
    
    // Calculate the size for the satellite body and panels
    const bodyLength = 2 * SAT_SIZE * world.getGlobeRadius() / EARTH_RADIUS_KM / 2;
    const bodyRadius = bodyLength / 2; // Adjust the radius as needed
    const panelLength = bodyLength * 2; // Making the panels longer than the body
    const panelWidth = bodyRadius; // Adjust the width as needed

    // Create the satellite body (Cylinder)
    const bodyGeometry = new THREE.CylinderGeometry(bodyRadius, bodyRadius, bodyLength*3, 32);
    const bodyMaterial = new THREE.MeshLambertMaterial({ color: 'grey' });
    const satelliteBody = new THREE.Mesh(bodyGeometry, bodyMaterial);

    // Create the solar panels (Boxes)
    const panelGeometry = new THREE.BoxGeometry(panelLength*2, panelWidth, 0.1); 
    const panelMaterial = new THREE.MeshLambertMaterial({ color: 'blue' }); 

    const solarPanel1 = new THREE.Mesh(panelGeometry, panelMaterial);
    solarPanel1.position.set(bodyLength / 2 + panelLength / 2, 0, 0); // Positioning one panel

    const solarPanel2 = new THREE.Mesh(panelGeometry, panelMaterial);
    solarPanel2.position.set(-(bodyLength / 2 + panelLength / 2), 0, 0); // Positioning the other panel

    // Group the satellite body and solar panels
    const satellite = new THREE.Group();
    satellite.add(satelliteBody);
    satellite.add(solarPanel1);
    satellite.add(solarPanel2);

    return satellite;
}


// Fetch and process the data, initialize the globe, and then set up custom object for the satellites
callApi()
    .then(responseData => processData(responseData))
    .then(processedData => {
        const world = initializeGlobe(processedData); // Variable 'world' contains the globe object
        
        // Add custom 3D object to the globe
        world.objectThreeObject(createSatellite(world));

    })
    .catch(error => {
        console.error('Error fetching and processing data:', error);
    });