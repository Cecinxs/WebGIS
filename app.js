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
    center: [-46.625290, -23.533773], // São Paulo
    zoom: 10
  });
});
