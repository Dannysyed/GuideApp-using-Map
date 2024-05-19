// src/Map.js
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGFuaWVsc3llZDIwIiwiYSI6ImNsd2NxMjJmYTA1NncyamxlcmhjNnpqZWIifQ.znFfrrla2t7suhHOwCfyuQ";

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
    if (map.current) return; // Initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11", // Style URL
      center: [-80.51667, 43.466667], // Initial center [lng, lat]
      zoom: 9, // Initial zoom level
    });

    // pointsOfInterest.forEach((poi) => {
    //   new mapboxgl.Marker() // Initialize and add each marker
    //     .setLngLat(poi.coordinates)
    //     .setPopup(new mapboxgl.Popup().setText(poi.name)) // Add popups
    //     .addTo(map.current);
    // });
    pointsOfInterest.forEach((poi) => {
      const popup = new mapboxgl.Popup().setHTML(`
          <h3>${poi.name}</h3>
          <p>Description of ${poi.name}</p>
          <img src="URL_TO_IMAGE" alt="${poi.name}" style="width:100px;height:auto;"/>
        `);
      new mapboxgl.Marker()
        .setLngLat(poi.coordinates)
        .setPopup(popup) // Add custom popups
        .addTo(map.current);
    });
  });
  return <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />;
};

export default Map;
