import { NavLink } from "@/components/nav-link";
import Link from "next/link";
import { cookies } from "next/headers";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { LogoutSlot } from "./logout-slot";
import { LogOut } from "lucide-react";
import { OrchestratedReveal } from "./reveal";

function Header() {
  const isLoggedIn = cookies().get("loggedIn")?.value === "true";

  return (
    <OrchestratedReveal asChild delay={0}>
      <header className="flex items-center justify-between px-4 py-4 xs:px-8 sm:px-16 md:px-24 md:py-6 lg:px-32 lg:py-6">
        <Link href="/">
          <Logo />
        </Link>

        {isLoggedIn && (
          <>
            <nav className="hidden gap-1 rounded-full bg-gray-100 p-1 lg:flex">
              <NavLink href="/dashboard" className="rounded-l-3xl">
                Dashboard
              </NavLink>
              <NavLink href="/catalogue">Book Catalogue</NavLink>
              <NavLink href="/contact" className="rounded-r-3xl">
                Contact Us
              </NavLink>
            </nav>

            <MobileMenu />

            <LogoutSlot>
              <button className="hidden items-center space-x-1 rounded-full p-3 hover:bg-gray-100 active:bg-gray-200 lg:flex">
                {/* <span className="block h-8 w-8 rounded-full bg-gray-300" /> */}
                <LogOut className="h-5 w-5" strokeWidth={1} />
                <span className="!ml-2">Sign out</span>
              </button>
            </LogoutSlot>
          </>
        )}

        {!isLoggedIn && <Link href="/contact">Contact Us</Link>}
      </header>
    </OrchestratedReveal>
  );
}

export { Header };
