"use client";

import Link, { useLinkStatus } from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/examples", label: "Examples" },
  { href: "/products", label: "Products" },
  { href: "/products/new", label: "New Product" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center gap-2 px-6 py-4">
        <span className="mr-4 text-sm font-bold uppercase tracking-wide text-slate-900">
          My App
        </span>
        {links.map((link) => (
          <Link
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            href={link.href}
            key={link.label}
            prefetch={false}
          >
            {link.label}
            <NavbarLink />
          </Link>
        ))}
      </nav>
    </header>
  );
}

function NavbarLink() {
  const { pending } = useLinkStatus();

  return (
    <span className="ml-2 inline-block min-w-12 text-xs text-slate-500">
      {pending ? "Loading..." : ""}
    </span>
  );
}
