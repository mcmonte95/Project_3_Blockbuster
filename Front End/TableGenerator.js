// TableGenerator.js


// Importing functions from API_fetcher.js
import { callApi, processData } from './API_fetcher.js';


// Helper function to insert data into an HTML tag
function updateParagraphContent(paragraphId, data) {
    var paragraph = document.getElementById(paragraphId);
    paragraph.textContent += data;
}

// Helper function to calculate average
function calculateAverage(arr) {
    return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}


// Helper function to round the number to two decimal points
function roundToTwoDecimals(num) {
    return parseFloat(num.toFixed(2));
}

callApi()
    .then(responseData => processData(responseData))
    .then(processedData => {
        
        // Get count of all satellites and insert into HTML tag
        const satCount = processedData.distancesFromEarthCenter.length
        updateParagraphContent('sat-count', satCount)
        
        const avgHeight = roundToTwoDecimals(calculateAverage(processedData.distancesFromEarthSurface))
        updateParagraphContent('avg-height', avgHeight)

    })
    .catch(error => {
        console.error('Error fetching and processing data:', error);
    });







