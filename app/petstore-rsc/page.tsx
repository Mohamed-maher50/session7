import PetFavoriteButton from "@/components/PetFavoriteButton";
import PetstoreControls from "@/components/PetstoreControls";
import { fetchPetsByStatus } from "@/lib/petstore";
import { isPetStatus, type PetStatus } from "@/lib/petstore-schema";
import { Suspense } from "react";

type PetstorePageProps = {
  searchParams: Promise<{
    status?: string;
  }>;
};

export default async function PetstoreRscPage({
  searchParams,
}: PetstorePageProps) {
  const { status: rawStatus } = await searchParams;
  const status: PetStatus = isPetStatus(rawStatus) ? rawStatus : "available";

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 p-6">
      <section className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Swagger Petstore API
        </p>
        <h1 className="text-3xl font-bold">RSC, Suspense, Link, Prefetching</h1>
        <p className="max-w-3xl text-slate-600">
          This page fetches pets from the Petstore OpenAPI route
          /pet/findByStatus. The page and list are Server Components, while the
          controls and save buttons are Client Components.
        </p>
      </section>

      <PetstoreControls activeStatus={status} />

      <Suspense key={status} fallback={<PetListFallback />}>
        <PetList status={status} />
      </Suspense>
    </main>
  );
}

async function PetList({ status }: { status: PetStatus }) {
  const pets = await fetchPetsByStatus(status);

  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-xl font-semibold">Server Component pet list</h2>
        <p className="text-sm text-slate-600">
          Loaded on the server for status:{" "}
          <span className="font-semibold text-slate-900">{status}</span>
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {pets.map((pet) => (
          <article
            className="rounded-lg border border-slate-200 p-4"
            key={`${pet.id}-${pet.name}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-slate-950">{pet.name}</h3>
                <p className="text-sm text-slate-600">
                  ID: {pet.id ?? "unknown"} | Status: {pet.status ?? "unknown"}
                </p>
              </div>
              <PetFavoriteButton />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PetListFallback() {
  return (
    <section className="space-y-3">
      <div className="h-6 w-64 animate-pulse rounded bg-slate-200" />
      <div className="grid gap-3 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            className="h-24 animate-pulse rounded-lg border border-slate-200 bg-slate-50"
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
