"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type NavLinkProps = React.PropsWithChildren<{
  href: string;
}>;

function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-4 py-2 ",
        active
          ? "bg-gray-950 text-white"
          : "hover:bg-gray-200 active:bg-gray-300"
      )}
    >
      {children}
    </Link>
  );
}

export { NavLink };
