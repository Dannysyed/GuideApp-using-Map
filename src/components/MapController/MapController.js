import React, { useEffect, useState } from "react";
import Map from "./Map";
import getCoordinates from "./Location";
import { useSelector } from "react-redux";
import { selectCount } from "../../store/counterSlice";

const MapController = () => {
  const count = useSelector(selectCount);

  // let [search, setSearch] = useState("Waterloo");

  let [currentLocation, setCurrenLocation] = useState({ lat: 1, lon: 1 });
  let [direction, setDirection] = useState(currentLocation);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const { lat, lon } = await getCoordinates(count);
      console.log(lat, lon);
      setDirection({ lat, lon });
    };
    fetchCoordinates();
    fetchCurrentLocation();
  }, [count]);

  console.log(direction.lat, direction.lon);

  const fetchCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        // return { lat: latitude, lon: longitude };
        setCurrenLocation({ lat: latitude, lon: longitude });
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className=" border-black w-[100%] h-[100%]">
      <Map direction={direction} />
    </div>
  );
};

export default MapController;
