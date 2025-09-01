export default function RecentSearches({ items = [], onPick }) {
  if (!items.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((city, idx) => (
        <button
          key={`${city}-${idx}`}
          onClick={() => onPick(city)}
          className="px-3 py-1 rounded-full border border-blue-300 bg-white hover:bg-blue-50 text-sm text-blue-700"
          title={`Search ${city}`}
        >
          {city}
        </button>
      ))}
    </div>
  );
          }
