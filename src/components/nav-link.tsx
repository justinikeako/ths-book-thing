"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type NavLinkProps = React.PropsWithChildren<{
  href: string;
  className?: string;
}>;

function NavLink({ href, className, children }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "rounded-md px-4 py-2",
        active
          ? "bg-gray-300 font-medium text-blue-950"
          : "text-gray-500 hover:bg-gray-200 active:bg-gray-300",
        className
      )}
    >
      {children}
    </Link>
  );
}

export { NavLink };
