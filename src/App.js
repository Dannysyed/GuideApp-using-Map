import React, { useEffect, useState } from "react";
import Map from "./components/MapController/Map";
import getCoordinates from "./components/MapController/Location";
import SearchInput from "./components/MapController/SearchInput";
import MapController from "./components/MapController/MapController";
import GuideController from "./components/GuideController/GuideController";

const App = () => {
  return (
    <div className=" bg-gray-100 flex flex-row p-2 border border-black gap-4 h-[100vh]">
      <MapController />
      <GuideController />
    </div>
  );
};

export default App;
