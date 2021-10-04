// https://www.openplanetary.org/opm/basemaps


// Create the map for the canvas element with ID mars-map
let marsMap = L.map('mars-map')  
marsMap.setView([0, 0], 3)   // The valid zoom levels are a smaller range than for Earth

// Add the tile layer - rocks, craters, labels etc. Without this, nothing to see 
L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png')
    .addTo(marsMap)
    .setZIndex(0)


// Same but for moon map
let moonMap = L.map('moon-map')
moonMap.setView([0, 0], 3)

var baselayer = new L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-moon-basemap-v0-1/all/{z}/{x}/{y}.png')
    .addTo(moonMap)
    .setZIndex(0);
