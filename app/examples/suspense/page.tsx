import { fetchPetsByStatus } from "@/lib/petstore";
import { Suspense } from "react";

export default function SuspensePage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-4 p-6">
      <h1 className="text-3xl font-bold">Suspense Component</h1>
      <p className="text-slate-600">
        Suspense shows fallback UI while the async pet list is loading.
      </p>

      <Suspense fallback={<PetFallback />}>
        <SlowPetList />
      </Suspense>
    </main>
  );
}

async function SlowPetList() {
  const pets = await fetchPetsByStatus("pending");

  return (
    <ul className="space-y-2 rounded-lg border border-slate-200 p-4">
      {pets.slice(0, 5).map((pet) => (
        <li className="rounded-md bg-slate-50 p-3" key={pet.id}>
          {pet.name}
        </li>
      ))}
    </ul>
  );
}

function PetFallback() {
  return (
    <div className="space-y-2 rounded-lg border border-slate-200 p-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          className="h-10 animate-pulse rounded-md bg-slate-100"
          key={index}
        />
      ))}
    </div>
  );
}
