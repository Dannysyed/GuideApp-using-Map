import React, { useEffect, useState } from "react";
import Map from "./components/MapController/Map";
import getCoordinates from "./components/MapController/Location";
import SearchInput from "./components/MapController/SearchInput";
import MapController from "./components/MapController/MapController";
import GuideController from "./components/GuideController/GuideController";

const App = () => {
  return (
    <div className=" bg-gray-100 flex flex-col items-start p-4 border border-black ">
      <MapController />
      <GuideController />
    </div>
  );
};

export default App;
