import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import localFont from "next/font/local";
import "../globals.css";

const inter = localFont({ src: "../fonts/Inter.var.woff2" });

export const metadata = {
  title: "THS Book Rentals",
  description: "Rent the school books you need.",
  icons: {
    icon: "../icon.png",
  },
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col">
        <Header />

        {props.children}

        <Footer />
      </body>
    </html>
  );
}
