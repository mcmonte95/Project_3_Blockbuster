const fs = require('fs');

// Function to generate random data
function generateRandomData() {
    const names = ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank'];
    const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

    const data = [];
    for (let i = 0; i < 10; i++) {
        const randomName = getRandomElement(names);
        const latitude = (Math.random() * 180) - 90; // Random latitude between -90 and 90
        const longitude = (Math.random() * 360) - 180; // Random longitude between -180 and 180
        const altitude = Math.random() * 1000; // Random altitude between 0 and 1000

        data.push({
            name: randomName,
            latitude: latitude.toFixed(6),
            longitude: longitude.toFixed(6),
            altitude: altitude.toFixed(2),
        });
    }

    return data;
}

// Generate random data and save to data.json
const jsonData = generateRandomData();
const jsonString = JSON.stringify(jsonData, null, 2);

fs.writeFileSync('data.json', jsonString, 'utf-8');

console.log('Random data has been generated and saved to data.json');
