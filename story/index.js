/* Source: Directly Accessing Street View Data from Google Maps Platform; 
https://developers.google.com/maps/documentation/javascript/examples/streetview-service
*/
/*
 * Click the map to set a new location for the Street View camera.
 */
let map;
let panorama;
let interactiveMarker;

function initMap() {
  const monaco = { lat: 43.734180, lng: 7.421481 };
  const sv = new google.maps.StreetViewService();

  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
  );
  // Set up the map.
  map = new google.maps.Map(document.getElementById("map"), {
    center: monaco,
    zoom: 16,
    streetViewControl: false,
  });
  // Set the initial Street View camera to the center of the map
  sv.getPanorama({ location: monaco, radius: 50 }).then(processSVData);
  // Look for a nearby Street View panorama when the map is clicked.
  // getPanorama will return the nearest pano when the given
  // radius is 50 meters or less.
  map.addListener("click", (event) => {
    sv.getPanorama({ location: event.latLng, radius: 50 })
      .then(processSVData)
      .catch((e) =>
        console.error("Street View data not found for this location."),
      );
  });
}
 //   interactiveMarker = new google.maps.Marker({
//   position: monaco,
  //    map: map,
    //  draggable: true,
    //  title: "Interactive Marker",
    // });

function processSVData({ data }) {
  const location = data.location;
  const marker = new google.maps.Marker({
    position: location.latLng,
    map,
    title: location.description,
  });

  panorama.setPano(location.pano);
  panorama.setPov({
    heading: 270,
    pitch: 0,
  });
  panorama.setVisible(true);
  marker.addListener("click", () => {
    const markerPanoID = location.pano;

    // Set the Pano to use the passed panoID.
    panorama.setPano(markerPanoID);
    panorama.setPov({
      heading: 270,
      pitch: 0,
    });
    panorama.setVisible(true);
  });
}

window.initMap = initMap;
