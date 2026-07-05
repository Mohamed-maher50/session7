export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-4 p-6">
      <div className="h-9 w-80 animate-pulse rounded bg-slate-200" />
      <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
      <div className="h-40 animate-pulse rounded-lg bg-slate-100" />
    </main>
  );
}
