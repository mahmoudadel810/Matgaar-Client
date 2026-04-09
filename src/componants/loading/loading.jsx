export function ReloadDots() {
  return (
    <div className=" container mx-auto flex flex-col  items-center gap-3 p-6  border-green-600 rounded-2xl w-48">
      <div className="flex gap-2">
        {[0, 150, 300].map((delay) => (
          <span key={delay} className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse"
            style={{ animationDelay: `${delay}ms` }} />
        ))}
      </div>
      <p className="text-sm text-gray-500">Fetching updates...</p>
    </div>
  );
}