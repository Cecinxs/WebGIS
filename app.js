require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Search",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Expand",
  "esri/widgets/Home"
], function(Map, MapView, Search, BasemapGallery, Expand, Home) {
  
  // 1. Criar o mapa
  const map = new Map({
    basemap: "hybrid"
  });

  // 2. Criar a view
  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-49.1587814990684, -20.236144024771797],
    zoom: 18
  });

  // 3. Criar e adicionar o widget Search
  const searchWidget = new Search({
    view: view,
    popupEnabled: false,
    placeholder: "Busque endereço" 
  });

  // 4. Adicionar à interface
  view.ui.add(searchWidget, "top-right");

  const basemapGallery = new BasemapGallery({
    view: view
  });

  const bgExpand = new Expand({
    view: view,
    content: basemapGallery,
    expandIconClass: "esri-icon-basemap", // ícone padrão de mapa base
    expandTooltip: "Escolher mapa base"
  });

  // 6. Adicionar à interface
  view.ui.add(bgExpand, "top-right");

  const homeWidget = new Home({
    view: view
  });

  view.ui.add(homeWidget, "top-left");

  // 5. Debug (verifique no console F12)
  view.when(function() {
    console.log("Mapa e widget carregados!");
    console.log("Widget position:", view.ui.find(searchWidget));
  });
});