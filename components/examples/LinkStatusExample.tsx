"use client";

import Link, { useLinkStatus } from "next/link";

export default function LinkStatusExample() {
  return (
    <Link
      className="inline-flex items-center rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white"
      href="/examples/server-component?status=sold"
      prefetch={false}
    >
      Go to slow server page
      <PendingDot />
    </Link>
  );
}

function PendingDot() {
  const { pending } = useLinkStatus();

  return (
    <span
      className={[
        "ml-3 h-2 w-2 rounded-full bg-white transition-opacity",
        pending ? "opacity-100" : "opacity-0",
      ].join(" ")}
    />
  );
}
