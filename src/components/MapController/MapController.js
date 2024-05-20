import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import Map from "./Map";
import getCoordinates from "./Location";

const MapController = () => {
  let [currentLocation, setCurrenLocation] = useState({ lat: 1, lon: 1 });
  let [direction, setDirection] = useState(currentLocation);

  let [search, setSearch] = useState("Waterloo");

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    setSearch(query);
  };

  useEffect(() => {
    const fetchCoordinates = async () => {
      const { lat, lon } = await getCoordinates(search);
      console.log(lat, lon);
      setDirection({ lat, lon });
    };
    fetchCoordinates();
    fetchCurrentLocation();
  }, [search]);

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
    <div className="flex flex-col w-[100%] border border-black basis-1/2 items-center rounded-lg shadow-xl p-4 gap-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to Map Guide</h1>
      <SearchInput onSearch={handleSearch} />
      <Map direction={direction} />
    </div>
  );
};

export default MapController;
