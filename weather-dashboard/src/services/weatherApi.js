import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getCurrentWeatherByCity(city, units = "metric") {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  if (!API_KEY) {
    throw new Error("Missing VITE_WEATHER_API_KEY in .env");
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        units,
        appid: API_KEY
      }
    });

    return response.data;
  } catch (err) {
    if (err.response?.status === 404) {
      throw new Error(`City "${city}" not found. Please check the name and try again.`);
    }
    if (err.code === "ERR_NETWORK") {
      throw new Error("Network error. Check your internet connection.");
    }
    throw new Error(err.message || "Failed to fetch weather. Please try again.");
  }
        }
