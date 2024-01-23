// References: 
// Simple Polylines example on Google Maps Platform: https://developers.google.com/maps/documentation/javascript/examples/polyline-simple
// Clickable and accessible markers on Google Maps Platform: https://developers.google.com/maps/documentation/javascript/examples/advanced-markers-accessibility#maps_advanced_markers_accessibility-javascript
// Marker information provided by Kenneth Mcleod: https://grandprixadventures.com/news/facts-about-monacogp.php; Nicky Haldenby: https://f1destinations.com/race-facts-monaco-f1-grand-prix/

// Simple Polylines
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: { lat: 43.735323, lng: 7.426205 },
    mapId: "ChIJEWqpGwDDzRIR0yehpj7GKr8",
  });
  const CircuitCoordinates = [
    { lat: 43.734458, lng: 7.421363 },
    { lat: 43.73575, lng: 7.42125 },
    { lat: 43.73659, lng: 7.42150 },
    { lat: 43.73693, lng: 7.42183 },
    { lat: 43.73706, lng: 7.42233 },
    { lat: 43.73709, lng: 7.42291 },
    { lat: 43.73730, lng: 7.42376 },
    { lat: 43.73747, lng: 7.42488 },
    { lat: 43.73783, lng: 7.42615 },
    { lat: 43.73801, lng: 7.42733 },
    { lat: 43.73831, lng: 7.42778 },
    { lat: 43.73862, lng: 7.42789 },
    { lat: 43.73902, lng: 7.42772 },
    { lat: 43.73931, lng: 7.42728 },
    { lat: 43.73956, lng: 7.42722 },
    { lat: 43.73992, lng: 7.42751 },
    { lat: 43.74108, lng: 7.42872 },
    { lat: 43.74111, lng: 7.42890 },
    { lat: 43.74104, lng: 7.42905 },
    { lat: 43.74085, lng: 7.42912 },
    { lat: 43.74064, lng: 7.42917 },
    { lat: 43.74040, lng: 7.42940 },
    { lat: 43.74024, lng: 7.42956 },
    { lat: 43.74022, lng: 7.42965 },
    { lat: 43.74025, lng: 7.42973 },
    { lat: 43.74036, lng: 7.42973 },
    { lat: 43.74075, lng: 7.42930 },
    { lat: 43.74087, lng: 7.42932 },
    { lat: 43.74099, lng: 7.42977 },
    { lat: 43.74110, lng: 7.43014 },
    { lat: 43.74108, lng: 7.43032 },
    { lat: 43.74033, lng: 7.43034 },
    { lat: 43.73893, lng: 7.42993 },
    { lat: 43.73834, lng: 7.42938 },
    { lat: 43.73782, lng: 7.42823 },
    { lat: 43.73737, lng: 7.42668 },
    { lat: 43.73722, lng: 7.42550 },
    { lat: 43.73712, lng: 7.42549 },
    { lat: 43.73710, lng: 7.42537 },
    { lat: 43.73719, lng: 7.42526 },
    { lat: 43.73692, lng: 7.42313 },
    { lat: 43.73680, lng: 7.42230 },
    { lat: 43.73670, lng: 7.42215 },
    { lat: 43.73638, lng: 7.42193 },
    { lat: 43.73582, lng: 7.42178 },
    { lat: 43.73543, lng: 7.42184 },
    { lat: 43.73519, lng: 7.42201 },
    { lat: 43.73504, lng: 7.42223 },
    { lat: 43.73422, lng: 7.42244 },
    { lat: 43.73410, lng: 7.42243 },
    { lat: 43.73393, lng: 7.42228 },
    { lat: 43.73381, lng: 7.42223 },
    { lat: 43.73333, lng: 7.42246 },
    { lat: 43.73298, lng: 7.42279 },
    { lat: 43.73278, lng: 7.42313 },
    { lat: 43.73268, lng: 7.42342 },
    { lat: 43.73255, lng: 7.42350 },
    { lat: 43.73248, lng: 7.42347 },
    { lat: 43.73241, lng: 7.42305 },
    { lat: 43.73247, lng: 7.42274 },
    { lat: 43.73272, lng: 7.42237 },
    { lat: 43.73308, lng: 7.42199 },
    { lat: 43.73410, lng: 7.42149 },
    { lat: 43.734458, lng: 7.421363 },

  ];
  const CircuitLayout = new google.maps.Polyline({
    path: CircuitCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 8,
  });

  CircuitLayout.setMap(map);

// Advanced Marker for circuit information
(async () => {
    // Request needed libraries.
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");



    // Marker information
    const circuitMarkers = [
      { position: { lat: 43.734405, lng: 7.421371 }, title: "Fastest lap (1'10''166): Lewis Hamilton in 2019 Qualifying (Q3)" },
      { position: { lat: 43.740304, lng: 7.429624 }, title: "Fairmont Hairpin: Slowest corner in F1, taken at around 48 kph" },
      { position: { lat: 43.738961, lng: 7.429920 }, title: "One of only three circuits to include a tunnel in F1 history" },
      { position: { lat: 43.735956, lng: 7.424736 }, title: "2 drivers ended up in the harbour in 1955 and 1965 respectively" },
      { position: { lat: 43.734512, lng: 7.422046 }, title: "Piscine (Pool section)" },
      { position: { lat: 43.732425, lng: 7.422437 }, title: "La Rascasse: Michael Schumacher parked his car and was penalized here in 2006 Qualifying" },
    ];

    // Info Window initialization
    const infoWindow = new InfoWindow();

    // Marker creation
    circuitMarkers.forEach(({ position, title }, i) => {
      const pin = new PinElement({
        glyph: `${i + 1}`,
      });

      const marker = new AdvancedMarkerElement({
        position,
        map,
        title: `${i + 1}. ${title}`,
        content: pin.element,
      });

      marker.addListener("click", ({ domEvent, latLng }) => {
        const { target } = domEvent;

        infoWindow.close();
        infoWindow.setContent(marker.title);
        infoWindow.open(marker.map, marker);
      });
    });
  })();
  
  
}




window.initMap = initMap;
