import LinkStatusExample from "@/components/examples/LinkStatusExample";

export default function UseLinkStatusPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-4 p-6">
      <h1 className="text-3xl font-bold">useLinkStatus</h1>
      <p className="text-slate-600">
        useLinkStatus must be used inside a child of Link. It returns pending
        while that Link navigation is waiting.
      </p>

      <LinkStatusExample />
    </main>
  );
}
