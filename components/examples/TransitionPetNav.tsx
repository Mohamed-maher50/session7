"use client";

import { petStatuses, type PetStatus } from "@/lib/petstore-schema";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function TransitionPetNav({
  activeStatus,
}: {
  activeStatus: PetStatus;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [counter, setCounter] = useState(0);
  function changeStatus(status: PetStatus) {
    // startTransition(() => {
    router.push(`/examples/use-transition?status=${status}`);
    // });
  }

  return (
    <section className="space-y-4 rounded-lg border border-slate-200 p-4">
      <span>Counter: {counter}</span>
      <button onClick={() => setCounter(counter + 1)}>up</button>
      <div className="flex gap-2">
        {petStatuses.map((status) => (
          <button
            className={[
              "rounded-md border px-3 py-2 text-sm font-medium",
              activeStatus === status
                ? "border-slate-950 bg-slate-950 text-white"
                : "border-slate-300 text-slate-700",
            ].join(" ")}
            // disabled={isPending}
            key={status}
            onClick={() => changeStatus(status)}
            type="button"
          >
            {status}
          </button>
        ))}
      </div>

      <p className="text-sm text-slate-600">
        {isPending ? "Navigation is pending..." : "Navigation is idle."}
      </p>
    </section>
  );
}
