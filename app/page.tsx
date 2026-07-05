import { getQueryClient } from "@/get-query-client";
import { pokemonGcTime, pokemonStaleTime } from "@/queries/pokemon";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
export default function Home() {
  const queryClient = getQueryClient();

  // const { data, dataUpdatedAt, error, isFetching, isLoading, isStale, refetch ,isPending} =
  //   useQuery(pokemonOptions);

  // const updatedAt = dataUpdatedAt
  //   ? new Intl.DateTimeFormat("en", {
  //       hour: "numeric",
  //       minute: "numeric",
  //       second: "numeric",
  //     }).format(dataUpdatedAt)
  //   : "Not fetched yet";
  const formater = new Intl.NumberFormat("ar-EG", {
    compactDisplay: "short",
  });

  const dateFormater = new Intl.RelativeTimeFormat("ar-EG", {
    style: "long",
  });

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center gap-6 p-8">
      {/* {formater.format(150000)} */}
      <section className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          TanStack Query cache timing example
        </p>
        <h1 className="text-3xl font-bold">staleTime vs gcTime</h1>
        <p className="text-slate-600">
          This query stays fresh for {pokemonStaleTime / 1000} seconds. While it
          is fresh, React Query can reuse the cached result without refetching
          just because the component renders again.
        </p>
        <p className="text-slate-600">
          After you leave this page, the query becomes inactive. If it stays
          inactive for {pokemonGcTime / 1000} seconds, React Query removes it
          from the cache. Come back after that and it will load from scratch.
        </p>

        <Link href="/products">products</Link>
      </section>
    </main>
  );
}
