export default function WeatherCard({
  city,
  country,
  temperature,
  humidity,
  wind,
  description,
  icon
}) {
  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{city}{country ? `, ${country}` : ""}</h2>
          <p className="text-slate-600 capitalize">{description || "—"}</p>
        </div>
        {iconUrl && (
          <img src={iconUrl} alt={description || "weather icon"} className="w-16 h-16 md:w-20 md:h-20" />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="rounded-xl bg-blue-50 p-4 text-center">
          <div className="text-sm text-blue-700">Temperature</div>
          <div className="text-3xl font-extrabold text-blue-800 mt-1">{temperature || "—"}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4 text-center">
          <div className="text-sm text-emerald-700">Humidity</div>
          <div className="text-3xl font-extrabold text-emerald-800 mt-1">{humidity || "—"}</div>
        </div>
        <div className="rounded-xl bg-amber-50 p-4 text-center">
          <div className="text-sm text-amber-700">Wind</div>
          <div className="text-3xl font-extrabold text-amber-800 mt-1">{wind || "—"}</div>
        </div>
      </div>
    </div>
  );
}
