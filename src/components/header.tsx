/* eslint-disable @next/next/no-html-link-for-pages */

import { NavLink } from "@/components/nav-link";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/dropdown-menu";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import { Logo } from "./logo";

function Header() {
  const isLoggedIn = cookies().get("loggedIn");

  return (
    <header className="flex items-center justify-between px-32 py-6">
      <Link href="/">
        <Logo />
      </Link>

      {isLoggedIn && (
        <>
          <nav className="flex gap-2 rounded-full bg-gray-100 p-1">
            <NavLink href="/">Dashboard</NavLink>
            <NavLink href="/catalogue">Book Catalogue</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-1 rounded-full p-1 hover:bg-gray-100 active:bg-gray-200">
                <span className="block h-8 w-8 rounded-full bg-gray-300" />

                <span className="!ml-2">Justin Ikeako</span>
                <ChevronDown strokeWidth={1} />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <a href="/api/logout">
                    <LogOut className="h-5 w-5" />
                    <span>Sign out</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}

      {!isLoggedIn && <Link href="/contact">Contact Us</Link>}
    </header>
  );
}

export { Header };
