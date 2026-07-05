"use server";
import { revalidatePath } from "next/cache";

export async function createProduct() {
  // Invalidate the cache for the /posts route
  revalidatePath("/posts");
}
