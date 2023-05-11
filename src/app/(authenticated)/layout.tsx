import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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

      <Footer />
    </>
  );
}
