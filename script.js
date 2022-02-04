      require([
        "esri/Map",
        "esri/layers/CSVLayer",
        "esri/views/MapView",
        "esri/widgets/Legend"
      ], (Map, CSVLayer, MapView, Legend) => {
        const url = "https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%202%20-%20ArcGIS%20JavaScript%20API/stl_crime_wgs_84.csv";
      
            const template = {
   title: "Crime committed at {ILEADSStreet}"
};
              const renderer = {
          type: "heatmap",
          colorStops: [
            { color: "rgba(63, 40, 102, 0)", ratio: 0 },
            { color: "#0052cc", ratio: 0.083 },
            { color: "#0066ff", ratio: 0.166 },
            { color: "#9900cc", ratio: 0.249 },
            { color: "#bf00ff", ratio: 0.332 },
            { color: "#6735be", ratio: 0.415 },
            { color: "#7139d4", ratio: 0.498 },
            { color: "#7b3ce9", ratio: 0.581 },
            { color: "#853fff", ratio: 0.664 },
            { color: "#ff99ff", ratio: 0.747 },
            { color: "#ff0066", ratio: 0.83 },
            { color: "#ff6600", ratio: 0.913 },
            { color: "#99ff66", ratio: 1 }
          ],
          maxPixelIntensity: 25,
          minPixelIntensity: 0
        };

        const layer = new CSVLayer({
        url: url,
        title: "St. Louis Crime Heatmap",
        copyright: "St. Louis Police Department",
		latitudeField:"Lat",
        longitudeField:"Lon",
		popupTemplate: template,
		renderer: renderer
});

        const map = new Map({
          basemap: "gray-vector",
          layers: [layer]
        });

        const view = new MapView({
          container: "viewDiv",
          center: [-90.1994, 38.6270],
          zoom: 12,
          map: map
        });

        view.ui.add(
          new Legend({
            view: view
          }),
          "bottom-left"
        );
      });
