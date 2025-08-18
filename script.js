// Inisialisasi peta
var map = L.map('map').setView([-6.914744, 107.609810], 13); // default Bandung

// Tile layer OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Titik bola naga random
let dragonBalls = [
  {lat: -6.914744, lng: 107.609810}, // Alun-alun Bandung
  {lat: -6.917464, lng: 107.619122}, // Braga
  {lat: -6.895563, lng: 107.633987}, // Dago
];

// Tambah marker bola naga
dragonBalls.forEach((db, i) => {
  L.marker([db.lat, db.lng])
    .addTo(map)
    .bindPopup(`Dragon Ball ${i+1} ⭐`);
});

// Tombol untuk deteksi lokasi user
document.getElementById("findMe").onclick = () => {
  map.locate({setView: true, maxZoom: 16});
};

// Jika lokasi ditemukan
map.on('locationfound', (e) => {
  L.marker(e.latlng).addTo(map).bindPopup("Kamu disini 👤").openPopup();
});
