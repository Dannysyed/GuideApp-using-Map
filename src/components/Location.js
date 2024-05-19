import axios from "axios";

const apiKey = "pk.c08830431af391b1ff0e2aabe56522a4";

const getCoordinates = async (query) => {
  try {
    const response = await axios.get(
      `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${encodeURIComponent(
        query
      )}&format=json`
    );
    const data = response.data;
    if (data.length > 0) {
      const location = data[0];
      return { lat: parseFloat(location.lat), lon: parseFloat(location.lon) };
    } else {
      throw new Error("Location not found");
    }
  } catch (error) {
    throw new Error(
      `Error: ${error.response.status} - ${error.response.statusText}`
    );
  }
};

export default getCoordinates;
