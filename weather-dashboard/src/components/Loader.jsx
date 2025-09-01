export default function Loader() {
  return (
    <div className="flex justify-center items-center p-6" aria-label="Loading...">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-200 border-t-blue-500"></div>
    </div>
  );
}
