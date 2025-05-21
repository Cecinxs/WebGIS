require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Search"
], function(Map, MapView, Search) {
  
  // 1. Criar o mapa
  const map = new Map({
    basemap: "osm"
  });

  // 2. Criar a view
  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-49.19982825513535, -20.282408807308848],
    zoom: 15
  });

  // 3. Criar e adicionar o widget Search
  const searchWidget = new Search({
    view: view,
    popupEnabled: false,
    placeholder: "Busque endereço" 
  });

  // 4. Adicionar à interface
  view.ui.add(searchWidget, "top-right");

  // 5. Debug (verifique no console F12)
  view.when(function() {
    console.log("Mapa e widget carregados!");
    console.log("Widget position:", view.ui.find(searchWidget));
  });
});