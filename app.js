require([
  "esri/Map",
  "esri/views/MapView"
], function(Map, MapView) {
  const map = new Map({
    basemap: "topo-vector"
  });

  const view = new MapView({
    container: "viewDiv", // onde o mapa será renderizado
    map: map,
    center: [-49.19982825513535, -20.282408807308848], // Fronteira
    zoom: 10
  });
});
