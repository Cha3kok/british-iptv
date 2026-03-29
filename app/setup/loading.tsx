function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-[#1a1a1a] rounded-lg ${className ?? ""}`} />
  );
}

export default function SetupLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header skeleton */}
      <div className="bg-[#0a0a0a] border-b border-white/5 pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-4 w-24 mb-6" />
          <Skeleton className="h-3 w-32 mb-4" />
          <Skeleton className="h-12 w-80 mb-4" />
          <Skeleton className="h-6 w-96" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar skeleton */}
          <aside className="lg:w-56 flex-shrink-0 flex flex-col gap-2">
            <Skeleton className="h-3 w-24 mb-1" />
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-14 w-full rounded-xl" />
            ))}
          </aside>

          {/* Content skeleton */}
          <main className="flex-1">
            <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-8">
              {/* Device header */}
              <div className="flex items-start justify-between mb-8">
                <div className="space-y-2">
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="h-7 w-24 rounded-full" />
              </div>

              {/* App banner */}
              <Skeleton className="h-16 w-full rounded-xl mb-8" />

              {/* Steps */}
              <div className="space-y-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <Skeleton className="w-8 h-8 rounded-full flex-shrink-0" />
                    <div className="flex-1 space-y-2 pt-1">
                      <Skeleton className="h-5 w-48" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA skeleton */}
            <Skeleton className="mt-6 h-24 w-full rounded-2xl" />
          </main>
        </div>
      </div>
    </div>
  );
}
