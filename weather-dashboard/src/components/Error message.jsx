export default function ErrorMessage({ message, className = "" }) {
  if (!message) return null;
  return (
    <div className={`rounded-md border border-red-200 bg-red-50 px-3 py-2 text-red-700 ${className}`}>
      {message}
    </div>
  );
}
