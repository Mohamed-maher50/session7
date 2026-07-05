import type { components } from "@/lib/my-openapi-3-schema";

export type Pet = components["schemas"]["Pet"];
export type PetStatus = NonNullable<Pet["status"]>;

export const petStatuses = ["available", "pending", "sold"] as const;

export function isPetStatus(status: string | undefined): status is PetStatus {
  return petStatuses.some((item) => item === status);
}
