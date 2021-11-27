mapboxgl.accessToken = 'pk.eyJ1IjoiaWk4OHBwIiwiYSI6ImNrdWxkb2trczAzbmIydnBpdThqcmRibXQifQ.ZDln9M7TLm4swEkuigZT2A';

var map = new mapboxgl.Map({

  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [2.336, 48.8609], // starting position [lng, lat]
  zoom: 15.7 
  
});

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.3364, 48.8610]
      },
      properties: {
        title: 'Mapbox',
        description: 'Washington, D.C.',
        message: 'map-marker-black.png'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.3333, 48.8603]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California',
        message: 'map-marker-grey.png'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.3328, 48.86194]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California',
        message: 'map-marker-grey.png'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.33639, 48.86253]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California',
        message: 'map-marker-grey.png'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.34015, 48.86080]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California',
        message: 'map-marker-grey.png'
      }
    }
  ]
};


// Add markers to the map.
for (const marker of geojson.features) {
  // Create a DOM element for each marker.
  const el = document.createElement('div');
  const imageUrl = marker.properties.message;
  const width = 23;
  const height = 33;
  el.className = 'marker';
  el.style.backgroundImage = `url("./${imageUrl}")`;
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.backgroundSize = '100%';
   
  el.addEventListener('click', () => {
  window.alert(marker.properties.message);
  });
   
  // Add markers to the map.
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
  }
  