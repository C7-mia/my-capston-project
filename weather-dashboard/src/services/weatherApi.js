import axios from "axios";

const API = "https://api.openweathermap.org/data/2.5/weather";

export async function getCurrentWeatherByCity(city, units = "metric") {
  const key = import.meta.env.VITE_WEATHER_API_KEY;
  if (!key) {
    throw new Error("Missing VITE_WEATHER_API_KEY in .env");
  }
  try {
    const { data } = await axios.get(API, {
      params: {
        q: city,
        units,
        appid: key
      }
    });
    return data;
  } catch (err) {
    if (err?.response?.status === 404) {
      throw new Error("City not found. Please check the name and try again.");
    }
    if (err?.code === "ERR_NETWORK") {
      throw new Error("Network error. Check your internet connection.");
    }
    throw new Error("Failed to fetch weather. Please try again.");
  }
  }
