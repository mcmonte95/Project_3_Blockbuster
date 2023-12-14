function stationsMap(stationslocation) {

    let stations = stationslocation.data.stations;

    let stationMarkers = [];

    for (let index = 0; index < stations.length; index++) {
        let station = stations[index];

        let stationMarker = L.marker([station.lat, station.lon, station.altitude])
            .bindPopup("<h3>" + station.name + "<h3><h3>: " + station.altitude + "</h3>");
        
        stationMarkers.push(stationMarker);
    }

    createImageBitmap(L.layerGroup(stationMarkers));

}

d3.json("http://127.0.0.1:5000/satLocations").then(importedData);