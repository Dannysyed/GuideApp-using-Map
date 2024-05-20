import React, { useEffect, useState } from "react";
import MapController from "./components/MapController/MapController";
import GuideController from "./components/GuideControllers/GuideController";

const App = () => {
  return (
    <div className=" bg-gray-100 flex flex-row  border-black h-[100vh] ">
      <GuideController />
      <MapController />
    </div>
  );
};

export default App;
