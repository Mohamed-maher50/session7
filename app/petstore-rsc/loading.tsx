import { PetListFallback } from "./page";

export default function Loading() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 p-6">
      <div className="space-y-3">
        <div className="h-5 w-36 animate-pulse rounded bg-slate-200" />
        <div className="h-10 w-72 animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-full max-w-2xl animate-pulse rounded bg-slate-100" />
      </div>
      <PetListFallback />
    </main>
  );
}
