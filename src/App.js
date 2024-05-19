import React, { useEffect, useRef, useState } from "react";
import Map from "./components/Map";
import getCoordinates from "./components/Location";
const App = () => {
  let [direction, setDirection] = useState({ lat: 1, lon: 1 });
  useEffect(() => {
    let ass = async () => {
      let ad = await getCoordinates("Waterloo canada");
      // console.log(ad);
      setDirection(ad);
      // setDirection({ lat: -80.53733, lon: 43.468 });
    };
    ass();
  }, []);
  console.log(direction.lat, direction.lon);
  return (
    <div>
      <h1>Mapbox in React</h1>
      <Map direction={direction} />
    </div>
  );
};

export default App;
