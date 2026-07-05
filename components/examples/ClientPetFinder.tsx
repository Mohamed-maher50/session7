"use client";

import { PETSTORE_API_BASE_URL } from "@/lib/client";
import type { Pet } from "@/lib/petstore-schema";
import { useState } from "react";

export default function ClientPetFinder() {
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(false);

  async function loadPet() {
    setLoading(true);
    const response = await fetch(`${PETSTORE_API_BASE_URL}/pet/1`);
    const data = (await response.json()) as Pet;
    setPet(data);
    setLoading(false);
  }

  return (
    <section className="space-y-4 rounded-lg border border-slate-200 p-4">
      <button
        className="rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white"
        disabled={loading}
        onClick={loadPet}
        type="button"
      >
        {loading ? "Loading..." : "Load pet in browser"}
      </button>

      {pet ? (
        <p className="text-slate-700">
          Client loaded: <strong>{pet.name}</strong>
        </p>
      ) : (
        <p className="text-slate-500">No pet loaded yet.</p>
      )}
    </section>
  );
}
