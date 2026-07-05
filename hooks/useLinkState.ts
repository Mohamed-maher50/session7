"use client";

import { usePathname, useSearchParams } from "next/navigation";

type UseLinkStateOptions = {
  exact?: boolean;
};

export function useLinkState(
  href: string,
  { exact = true }: UseLinkStateOptions = {},
) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  const isActive = exact
    ? pathname === href
    : href === "/" || pathname === href
      ? pathname === href
      : pathname.startsWith(`${href}/`);
  const hrefWithState = queryString ? `${href}?${queryString}` : href;

  return {
    href: hrefWithState,
    isActive,
    ariaCurrent: isActive ? "page" : undefined,
  } as const;
}
