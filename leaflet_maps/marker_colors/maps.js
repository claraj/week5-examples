let metroAreaCenterCoordinates = [44.96, -93.2]  // Array of latitude and longitude 
let zoomLevel = 9   // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)


let purpleIcon = L.icon({
    iconUrl: 'marker_icons/purple-marker.png',
    iconAnchor: [30, 30],     // move the icon so the bottom of the pin is on top of the coordiates
    iconSize: [30, 30],       // define size 
    popupAnchor: [-15, -25]   // where is popup, relative to icon
})

let greenIcon = L.icon({
    iconUrl: 'marker_icons/green-marker.png',
    iconAnchor: [30, 30],
    iconSize: [30, 30],
    popupAnchor: [-15, -25]
})

// Add some markers for Minneapolis College and Saint Paul College
let mctcCoordinates = [44.9724, -93.2844]
let mctcMarker = L.marker(
        mctcCoordinates, 
        { icon: purpleIcon }  // Set the marker's icon, replace the default
    )
    .bindPopup('Minnepolis College<br><a href="https://minneapolis.edu">Website</a>')
    .addTo(map)

let stPaulCoordinates = [44.94839, -93.1099]
let stpMarker = L.marker(
        stPaulCoordinates, 
        { icon: greenIcon }  // Set the marker's icon, replace the default
    )
    .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
    .addTo(map)


