// This example creates a 2-pixel-wide red polyline showing the path of
// the first trans-Pacific flight between Oakland, CA, and Brisbane,
// Australia which was made by Charles Kingsford Smith.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: { lat: 43.734458, lng: 7.421363 },
  });
  const CircuitCoordinates = [
    { lat: 43.734458, lng: 7.421363 },
    { lat: 43.73575, lng: 7.42125 },
    { lat: 43.73659, lng: 7.42150 },
    { lat: 43.73693, lng: 7.42183 },
    { lat: 43.73706, lng: 7.42233 },
    { lat: 43.73709, lng: 7.42291 },
    { lat: 43.73, lng: 7.42 },
    { lat: 43.73, lng: 7.42 },
    { lat: 43.73, lng: 7.42 },
    
  ];
  const flightPath = new google.maps.Polyline({
    path: CircuitCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
}

window.initMap = initMap;
