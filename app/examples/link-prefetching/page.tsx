import Link from "next/link";

export default function LinkPrefetchingPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-4 p-6">
      <h1 className="text-3xl font-bold">Link Component & Prefetching</h1>
      <p className="text-slate-600">
        Link gives client-side navigation. In production, prefetch can prepare a
        route before the user clicks it.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          className="rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white"
          href="/examples/server-component?status=available"
        >
          Prefetch default
        </Link>

        <Link
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
          href="/examples/server-component?status=pending"
          prefetch={false}
        >
          Prefetch false
        </Link>
      </div>
    </main>
  );
}
