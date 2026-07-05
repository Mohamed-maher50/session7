import Link from "next/link";

const examples = [
  {
    href: "/examples/server-component",
    title: "React Server Component",
    text: "Fetch Petstore data on the server.",
  },
  {
    href: "/examples/client-component",
    title: "Client Component",
    text: "Use state, events, and browser-side fetch.",
  },
  {
    href: "/examples/suspense",
    title: "Suspense",
    text: "Show fallback while async server UI loads.",
  },
  {
    href: "/examples/link-prefetching",
    title: "Link & Prefetching",
    text: "Navigate with Next Link and compare prefetch behavior.",
  },
  {
    href: "/examples/use-transition",
    title: "useTransition",
    text: "Navigate without blocking the current UI.",
  },
  {
    href: "/examples/use-link-status",
    title: "useLinkStatus",
    text: "Show pending state inside a Link.",
  },
];

export default function ExamplesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Petstore Next.js Examples</h1>
        <p className="mt-2 text-slate-600">
          Each page explains one idea with a small component.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {examples.map((example) => (
          <Link
            className="rounded-lg border border-slate-200 p-4 hover:bg-slate-50"
            href={example.href}
            key={example.href}
          >
            <h2 className="font-semibold text-slate-950">{example.title}</h2>
            <p className="mt-1 text-sm text-slate-600">{example.text}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
