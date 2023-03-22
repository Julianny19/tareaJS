let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat:42.75508, lng:-7.86621},
    zoom: 2,
  });
  const marker1 = new google.maps.Marker({
    position:{ lat: 8.58972, lng: -71.15611 },
    map,
    title:"Merida"
})
const marker2 = new google.maps.Marker({
    position:{lat:42.75508, lng:-7.86621},
    map,
    title:"Galicia"
})
const marker3 = new google.maps.Marker({
    position:{lat:45.5838300, lng:11.7181900},
    map,
    title:"Roma"
})
}

window.initMap = initMap;