import Link from "next/link";
import { Header } from "@/components/header";

export const metadata = {
  title: "THS Book Rentals",
  description: "Rent the school books you need.",
  icons: {
    icon: "../icon.png",
  },
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <>
      <Header />

      {props.children}

      <footer className="flex flex-wrap items-center justify-between px-8 py-4 md:px-24 md:py-6 lg:px-32 lg:py-6">
        <p>Copyright &copy; 2023 Tarrant High School</p>
        <p>
          Created by&nbsp;
          <Link href="https://notprimitive.com" className="underline">
            Justin Ikeako
          </Link>
        </p>
      </footer>
    </>
  );
}
