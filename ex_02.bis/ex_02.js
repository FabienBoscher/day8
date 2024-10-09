let map = L.map('map').setView([46.603354, 1.888334], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let epitech_Icon = L.icon({
    iconUrl: "https://www.pngkit.com/png/detail/459-4596239_epitech-epitech-logo-transparent.png",
    iconSize: [40, 40],

});

let schools = [
    { name: "Paris", coords: [48.8566, 2.3522] },
    { name: "Lyon", coords: [45.764043, 4.835659] },
    { name: "Bordeaux", coords: [44.837789, -0.57918] },
    { name: "Toulouse", coords: [43.604652, 1.444209] },
    { name: "Lille", coords: [50.62925, 3.057256] },
    { name: "Marseille", coords: [43.296482, 5.36978] }
];

var schoolMarkers = L.layerGroup();

schools.forEach(function(school) {
    var marker = L.marker(school.coords, { icon: epitechIcon })
        .bindPopup(school.name + ' rocks!');
    schoolMarkers.addLayer(marker);
});

schoolMarkers.addTo(map);
map.fitBounds(schoolMarkers.getBounds());