import { useState } from "react";

export default function SearchBar({ onSearch, loading }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const city = value.trim();
    if (!city) return;
    onSearch(city);
  };

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        type="text"
        aria-label="Search city"
        placeholder="Search city…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 rounded-md border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Searching…" : "Search"}
      </button>
    </form>
  );
}
