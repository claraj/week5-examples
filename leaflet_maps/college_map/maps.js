let metroAreaCenterCoordinates = [44.96, -93.2]  // Array of latitude and longitude 
let zoomLevel = 9   // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)


// Add some markers for Minneapolis College and Saint Paul College
let mctcCoordinates = [44.9724, -93.2844]
let mctcMarker = L.marker(mctcCoordinates)
    .bindPopup('Minnepolis College<br><a href="https://minneapolis.edu">Website</a>')
    .addTo(map)

let stPaulCoordinates = [44.94839, -93.1099]
let stpMarker = L.marker(stPaulCoordinates)
    .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
    .addTo(map)


// Add a circle approximately around the Twin Cities metro 
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
        color: 'green',    // use any CSS color name
        radius: 30000,
        fillOpacity: 0.1
    })
    .bindPopup("Twin Cities Metro Area")
    .addTo(map)
