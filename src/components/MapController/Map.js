import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFuaWVsc3llZDIwIiwiYSI6ImNsd2NxMjJmYTA1NncyamxlcmhjNnpqZWIifQ.znFfrrla2t7suhHOwCfyuQ";

const Map = ({ direction }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const pointsOfInterest = [
    {
      id: 1,
      name: "University of Waterloo",
      coordinates: [-80.53733, 43.468],
    },
    { id: 2, name: "Statue of Liberty", coordinates: [-74.0445, 40.6892] },
    { id: 3, name: "Times Square", coordinates: [-73.9851, 40.758] },
  ];

  useEffect(() => {
    // setting up the whole map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [direction.lon, direction.lat],
      zoom: 9,
    });

    //  setting up the marker for current location
    new mapboxgl.Marker()
      .setLngLat([direction.lon, direction.lat])
      .addTo(map.current);

    //   setting up the marker for all guided list (point of intereset)
    pointsOfInterest.forEach((poi) => {
      const popup = new mapboxgl.Popup().setHTML(`
          <h3>${poi.name}</h3>
          <p>Description of ${poi.name}</p>
          <img src="URL_TO_IMAGE" alt="${poi.name}" style="width:100px;height:auto;"/>
        `);
      new mapboxgl.Marker()
        .setLngLat(poi.coordinates)
        .setPopup(popup)
        .addTo(map.current);
    });
  }, [direction.lat, direction.lon, pointsOfInterest]);

  return <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />;
};

export default Map;
