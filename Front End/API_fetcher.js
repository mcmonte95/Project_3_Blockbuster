// API_fetcher.js

// Function to call the API
export function callApi() {
    return fetch('http://127.0.0.1:5000/satLocations')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
}

// Function to process the data using mapping
export function processData(jsonData) {
    return {
        distancesFromEarthCenter: jsonData.map(item => item["Distance from Earth Center (km)"]),
        distancesFromEarthSurface: jsonData.map(item => item["Distance from Earth Surface (km)"]),
        latitudes: jsonData.map(item => item["Latitude"]),
        longitudes: jsonData.map(item => item["Longitude"]),
        satelliteNames: jsonData.map(item => item["Satellite Name"])
    };
}

// Function to log the data to the console for troubleshooting and to confirm each array was created correctly
export function logData(data) {
    console.log("Distances from Earth Center (km):", data.distancesFromEarthCenter);
    console.log("Distances from Earth Surface (km):", data.distancesFromEarthSurface);
    console.log("Latitudes:", data.latitudes);
    console.log("Longitudes:", data.longitudes);
    console.log("Satellite Names:", data.satelliteNames);
}
