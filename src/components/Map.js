import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  // Replace with your Mapbox access token
  mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11", // Style URL
      center: [-74.5, 40], // Initial center [lng, lat]
      zoom: 9, // Initial zoom level
    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} style={{ width: "100%", height: "400px" }} />
    </div>
  );
};

export default Map;
