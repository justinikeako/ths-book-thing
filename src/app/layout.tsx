import { NavLink } from "@/components/nav-link";
import { ChevronDown } from "lucide-react";

import localFont from "next/font/local";
import "../styles/globals.css";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/dropdown-menu";
import { LogOut } from "lucide-react";
import Link from "next/link";

const inter = localFont({ src: "../fonts/Inter.var.woff2" });
export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header className="flex items-center justify-between px-32 py-6">
          <span className="block">Logo</span>
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
                <DropdownMenuItem>
                  <LogOut className="h-5 w-5" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {children}

        <footer className="flex items-center justify-between px-32 py-8">
          <p>Copyright &copy; 2023 Tarrant High School</p>
          <p>
            Created by{" "}
            <Link href="https://notprimitive.com" className="underline">
              Justin Ikeako
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
