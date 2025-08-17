export default function RecentSearches({ items = [], onPick }) {
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((c) => (
        <button
          key={c}
          onClick={() => onPick(c)}
          className="px-3 py-1 rounded-full border border-slate-300 hover:bg-slate-100 text-sm"
          title={`Search ${c}`}
        >
          {c}
        </button>
      ))}
    </div>
  );
      }
