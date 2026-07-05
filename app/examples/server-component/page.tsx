import { fetchPetsByStatus } from "@/lib/petstore";
import { isPetStatus, type PetStatus } from "@/lib/petstore-schema";

type PageProps = {
  searchParams: Promise<{
    status?: string;
  }>;
};

export default async function ServerComponentPage({ searchParams }: PageProps) {
  const { status: rawStatus } = await searchParams;
  const status: PetStatus = isPetStatus(rawStatus) ? rawStatus : "available";
  const pets = await fetchPetsByStatus(status);

  return (
    <main className="mx-auto w-full max-w-3xl space-y-4 p-6">
      <h1 className="text-3xl font-bold">React Server Component</h1>
      <p className="text-slate-600">
        This page is async, runs on the server, fetches Petstore data, then
        sends HTML/RSC payload to the browser.
      </p>

      <div className="rounded-lg border border-slate-200 p-4">
        <p className="text-sm text-slate-500">Status: {status}</p>
        <ul className="mt-3 space-y-2">
          {pets.slice(0, 5).map((pet) => (
            <li className="rounded-md bg-slate-50 p-3" key={pet.id}>
              {pet.name}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
