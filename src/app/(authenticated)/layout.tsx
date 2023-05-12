import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "../globals.css";

// const inter = localFont({
//   src: "../fonts/Inter.var.woff2",
//   display: "swap",
//   variable: "--font-inter",
// });

const inter = Montserrat({
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
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col">
        <Header />

        {props.children}

        <Footer />
      </body>
    </html>
  );
}
