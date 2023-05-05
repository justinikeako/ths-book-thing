import Link from "next/link";

import localFont from "next/font/local";
import "../styles/globals.css";
import { Header } from "@/components/header";

const inter = localFont({ src: "../fonts/Inter.var.woff2" });

export const metadata = {
  title: "THS Book Rentals",
  description: "Rent the school books you need.",
  icons: {
    icon: "./icon.png",
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col">
        <Header />

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
