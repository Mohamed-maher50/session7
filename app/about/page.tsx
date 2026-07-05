import Link from "next/link";
// export const revalidate = 3600; // invalidate every hour

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center gap-4 p-8">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        Query is inactive now
      </p>
      <h1 className="text-3xl font-bold">Wait 5 seconds</h1>
      <p className="text-slate-600">
        The Pokemon query has no active subscribers while you are on this page.
        After its gcTime passes, React Query removes it from the cache.
      </p>
      <Link
        className="w-fit rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white"
        href="/"
      >
        Back to Pokemon
      </Link>
    </main>
  );
}
