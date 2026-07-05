"use client";

import { useState } from "react";

export default function PetFavoriteButton() {
  const [favorite, setFavorite] = useState(false);

  return (
    <button
      className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 hover:bg-slate-100"
      onClick={() => setFavorite((current) => !current)}
      type="button"
    >
      {favorite ? "Saved" : "Save"}
    </button>
  );
}
