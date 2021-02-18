let theodoreWirthParkCoordinates = [44.988406, -93.324333] 
let zoomLevel = 13   // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
let map = L.map('park-map').setView(theodoreWirthParkCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)


let wirthMarker = L.marker(theodoreWirthParkCoordinates)
    .bindPopup('Theodore Wirth Park, Minneapolis')
    .addTo(map)

// Add click event listener to marker. 
// Needs a callback function, similar to adding listeners to HTML elements
wirthMarker.on('click', function() {
    alert('That\'s the marker for Theodore Wirth Park')
})

// Various other listeners can be added to other leaflet components,
// for example a double-click listener for the whole map. 

map.doubleClickZoom.disable()  // optional, but by default, double-clicking on a
// map will zoom in. And, the code in the dblclick event listener function will
// run, and you may not want both to happen. 

map.on('dblclick', function() {
    alert('Here\'s a map of Minneapolis')
})

// Leaflet reference on DOM events https://leafletjs.com/reference-1.7.1.html#domevent

