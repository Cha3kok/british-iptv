function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-[#1a1a1a] rounded-lg ${className ?? ""}`} />;
}

export default function PostLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-[#0a0a0a] border-b border-white/5 pt-24 pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-4 w-28 mb-6" />
          <div className="flex gap-3 mb-5">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
          <Skeleton className="h-10 w-full mb-3" />
          <Skeleton className="h-10 w-4/5 mb-4" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-3/4" />
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="space-y-3">
            {i > 0 && <Skeleton className="h-7 w-48 mb-1" />}
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
          </div>
        ))}

        <Skeleton className="h-44 w-full rounded-2xl mt-14" />
      </div>
    </div>
  );
}
