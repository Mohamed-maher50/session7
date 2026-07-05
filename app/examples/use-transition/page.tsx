import TransitionPetNav from "@/components/examples/TransitionPetNav";
import { fetchPetsByStatus } from "@/lib/petstore";
import { isPetStatus, type PetStatus } from "@/lib/petstore-schema";

type PageProps = {
  searchParams: Promise<{
    status?: string;
  }>;
};

export default async function UseTransitionPage({ searchParams }: PageProps) {
  const { status: rawStatus } = await searchParams;
  const status: PetStatus = isPetStatus(rawStatus) ? rawStatus : "available";
  const pets = await fetchPetsByStatus(status);

  return (
    <main className="mx-auto w-full max-w-3xl space-y-4 p-6">
      <h1 className="text-3xl font-bold">useTransition Hook</h1>
      <p className="text-slate-600">
        Click a status, then type in the input or press the counter while the
        next Petstore result is loading. That is the non-blocking part.
      </p>

      <TransitionPetNav activeStatus={status} />

      <ul className="space-y-2 rounded-lg border border-slate-200 p-4">
        {pets.slice(0, 4).map((pet) => (
          <li className="rounded-md bg-slate-50 p-3" key={pet.id}>
            {pet.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
