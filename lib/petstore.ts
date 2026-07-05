import { PETSTORE_API_BASE_URL } from "@/lib/client";
import type { Pet, PetStatus } from "@/lib/petstore-schema";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchPetsByStatus(status: PetStatus) {
  await wait(1200);

  const response = await fetch(
    `${PETSTORE_API_BASE_URL}/pet/findByStatus?status=${status}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Could not load pets from Petstore");
  }

  const data = (await response.json()) as Pet[];

  return data.slice(0, 8);
}
