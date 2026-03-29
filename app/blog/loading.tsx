function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-[#1a1a1a] rounded-lg ${className ?? ""}`} />;
}

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-[#0a0a0a] border-b border-white/5 pt-24 pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-3 w-16 mb-4" />
          <Skeleton className="h-12 w-72 mb-3" />
          <Skeleton className="h-6 w-96" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Featured skeleton */}
        <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 mb-10">
          <Skeleton className="h-6 w-20 rounded-full mb-5" />
          <Skeleton className="h-9 w-3/4 mb-3" />
          <Skeleton className="h-5 w-full mb-2" />
          <Skeleton className="h-5 w-2/3 mb-6" />
          <div className="flex justify-between">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="bg-[#111111] border border-white/5 rounded-2xl p-6">
              <Skeleton className="h-6 w-20 rounded-full mb-4" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-4/5 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-5" />
              <div className="flex justify-between pt-4 border-t border-white/5">
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
