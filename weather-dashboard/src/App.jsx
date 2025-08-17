import { useEffect, useMemo, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import RecentSearches from "./components/RecentSearches";
import { getCurrentWeatherByCity } from "./services/weatherApi";
import { cToF } from "./utils/units";

const REFRESH_MINUTES = Number(import.meta.env.VITE_REFRESH_MINUTES || 5);

export default function App() {
  const [city, setCity] = useState("Kampala");         // default city
  const [units, setUnits] = useState("metric");        // "metric" | "imperial"
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null);
  const [recent, setRecent] = useState(() => {
    // restore recent searches
    const saved = localStorage.getItem("recentCities");
    return saved ? JSON.parse(saved) : [];
  });

  const refreshLabel = useMemo(
    () => (REFRESH_MINUTES > 0 ? `Auto refresh every ${REFRESH_MINUTES} min` : "Manual refresh"),
    []
  );

  const fetchWeather = async (cityName = city) => {
    try {
      setError("");
      setLoading(true);
      const data = await getCurrentWeatherByCity(cityName, units);
      setWeather(data);
      setCity(cityName);

      // manage recents (keep last 5 unique)
      setRecent(prev => {
        const next = [cityName, ...prev.filter(c => c.toLowerCase() !== cityName.toLowerCase())].slice(0, 5);
        localStorage.setItem("recentCities", JSON.stringify(next));
        return next;
      });
    } catch (e) {
      setError(e.message || "Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  // initial fetch
  useEffect(() => {
    fetchWeather(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [units]);

  // auto refresh
  useEffect(() => {
    if (!REFRESH_MINUTES || REFRESH_MINUTES <= 0) return;
    const ms = REFRESH_MINUTES * 60 * 1000;
    const id = setInterval(() => fetchWeather(city), ms);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, units]);

  const handleSearch = (value) => {
    fetchWeather(value);
  };

  const handleToggleUnits = () => {
    setUnits(prev => (prev === "metric" ? "imperial" : "metric"));
  };

  const handleManualRefresh = () => fetchWeather(city);

  const tempDisplay = () => {
    if (!weather) return "";
    const t = weather.main?.temp;
    if (t == null) return "";
    if (units === "metric") return `${Math.round(t)}°C`;
    return `${Math.round(t)}°F`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200">
      <header className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700">Weather Dashboard</h1>
        <p className="text-sm text-blue-700/70 mt-1">{refreshLabel}</p>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-14">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow p-4 md:p-6">
          <SearchBar onSearch={handleSearch} loading={loading} />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4 gap-3">
            <RecentSearches items={recent} onPick={handleSearch} />
            <div className="flex gap-2 justify-end">
              <button
                onClick={handleToggleUnits}
                className="px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                title="Toggle units"
              >
                {units === "metric" ? "Switch to °F" : "Switch to °C"}
              </button>
              <button
                onClick={handleManualRefresh}
                className="px-3 py-2 rounded-md bg-slate-600 text-white hover:bg-slate-700"
              >
                Refresh
              </button>
            </div>
          </div>

          {error && <ErrorMessage message={error} className="mt-4" />}

          <div className="mt-6">
            {loading ? (
              <div className="text-center py-10 text-slate-600">Loading current weather…</div>
            ) : weather ? (
              <WeatherCard
                city={weather.name}
                country={weather.sys?.country}
                temperature={tempDisplay()}
                humidity={`${weather.main?.humidity ?? "–"}%`}
                wind={`${Math.round(weather.wind?.speed ?? 0)} ${units === "metric" ? "m/s" : "mph"}`}
                description={weather.weather?.[0]?.description}
                icon={weather.weather?.[0]?.icon}
              />
            ) : (
              <div className="text-center text-slate-600">Search for a city to see the weather.</div>
            )}
          </div>
        </div>
      </main>

      <footer className="text-center text-xs text-slate-600 py-6">
        Data by OpenWeatherMap • Built with React + Tailwind
      </footer>
    </div>
  );
                               }
