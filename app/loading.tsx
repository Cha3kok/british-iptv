export default function RootLoading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-10 h-10 border-2 border-zinc-800 border-t-amber-500 rounded-full animate-spin" />
        <p className="text-zinc-500 text-sm">Loading…</p>
      </div>
    </div>
  );
}
