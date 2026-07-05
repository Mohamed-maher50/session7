import { queryOptions } from "@tanstack/react-query";

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
}

export const pokemonStaleTime = 1000 * 10; // 10 seconds
export const pokemonGcTime = 1000 * 5; // 5 seconds

export const pokemonOptions = (pokemonId: number) =>
  queryOptions({
    queryKey: ["pokemon", pokemonId],
    queryFn: async (): Promise<Pokemon> => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
      );
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay
      if (!response.ok) {
        throw new Error("Failed to fetch Pokemon");
      }

      return response.json();
    },

    // The data is considered fresh for 10 seconds. During this time, mounting
    // this query again will reuse the cache instead of fetching immediately.
    staleTime: pokemonStaleTime,

    // Once this query has no active subscribers, keep it in the cache for
    // 5 seconds. After that, React Query garbage collects it.
    gcTime: pokemonGcTime,
  });
