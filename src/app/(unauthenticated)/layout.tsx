import { cn } from "@/lib/utils";

import localFont from "next/font/local";
import "../globals.css";

const inter = localFont({
  src: "../fonts/Inter.var.woff2",
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "THS Book Rentals",
  description: "Rent the school books you need.",
  icons: {
    icon: "../icon.png",
  },
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en" className={cn(inter.variable, "h-full font-sans")}>
      <body className="flex h-full flex-col overflow-hidden">
        {props.children}
      </body>
    </html>
  );
}
