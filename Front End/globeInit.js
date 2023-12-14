import { callApi, processData } from './API_fetcher.js';

function initializeGlobe(processedData) {
    // Construct gData using the processed data
    const gData = processedData.latitudes.map((lat, index) => ({
        lat: lat,
        lng: processedData.longitudes[index],
        size: processedData.distancesFromEarthCenter[index] / 20000, // Example conversion, adjust as needed
        color: 'green'
    }));

    Globe()
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .pointsData(gData)
        .pointAltitude('size')
        .pointColor('color')
        (document.getElementById('globeViz'));
}

// Fetch and process the data, then initialize the globe
callApi()
    .then(responseData => processData(responseData))
    .then(processedData => {
        initializeGlobe(processedData);
    })
    .catch(error => {
        console.error('Error fetching and processing data:', error);
    });
