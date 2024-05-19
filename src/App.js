import React, { useEffect, useRef } from "react";
import Map from "./components/Map";
const App = () => {
  let map = useRef(null);
  useEffect(() => {
    if (map.current) {
      // Access the DOM element
      map.current.style.color = "red";
    }
  }, []);

  return (
    <div>
      <h1 ref={map}>Mapbox in React</h1>
      <Map />
    </div>
  );
};

export default App;
