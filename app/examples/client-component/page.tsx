import ClientPetFinder from "@/components/examples/ClientPetFinder";

export default function ClientComponentPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-4 p-6">
      <h1 className="text-3xl font-bold">Client Component</h1>
      <p className="text-slate-600">
        This example uses the use client directive, useState, an onClick handler, and a
        browser-side fetch to Petstore.
      </p>
      <ClientPetFinder />
    </main>
  );
}
