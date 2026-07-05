"use client";

import { petStatuses, type PetStatus } from "@/lib/petstore-schema";
import Link, { useLinkStatus } from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function PetstoreControls({
  activeStatus,
}: {
  activeStatus: PetStatus;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function navigateWithTransition(status: PetStatus) {
    startTransition(() => {
      router.push(`/petstore-rsc?status=${status}`);
    });
  }

  return (
    <section className="space-y-4 rounded-lg border border-slate-200 p-4">
      <div>
        <h2 className="text-lg font-semibold">Client Component controls</h2>
        <p className="text-sm text-slate-600">
          Buttons use useTransition + router.push. Links use Link prefetching
          and useLinkStatus.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {petStatuses.map((status) => (
          <button
            className={[
              "rounded-md border px-3 py-2 text-sm font-medium transition",
              activeStatus === status
                ? "border-slate-950 bg-slate-950 text-white"
                : "border-slate-300 text-slate-700 hover:bg-slate-100",
            ].join(" ")}
            disabled={isPending}
            key={status}
            onClick={() => navigateWithTransition(status)}
            type="button"
          >
            {status}
          </button>
        ))}
      </div>

      <div className="flex min-h-5 items-center gap-2 text-sm text-slate-500">
        <span className="font-medium text-slate-700">useTransition:</span>
        {isPending ? "Navigating without blocking this UI..." : "Idle"}
      </div>

      <div className="flex flex-wrap gap-2">
        {petStatuses.map((status) => (
          <Link
            className="rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-700 hover:bg-slate-200"
            href={`/petstore-rsc?status=${status}`}
            key={status}
            prefetch={false}
          >
            Link to {status}
            <LinkPendingHint />
          </Link>
        ))}
      </div>
    </section>
  );
}

function LinkPendingHint() {
  const { pending } = useLinkStatus();

  return (
    <span
      aria-hidden
      className={[
        "ml-2 inline-block h-2 w-2 rounded-full bg-current align-middle transition-opacity",
        pending ? "opacity-60" : "opacity-0",
      ].join(" ")}
    />
  );
}
