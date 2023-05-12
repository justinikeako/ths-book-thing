import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { OrchestratedReveal } from "@/components/reveal";

export const metadata = {
  title: `Login | THS Book Rentals`,
};

export default function Layout(props: React.PropsWithChildren) {
  return (
    <>
      {/* This prevents the header's enter animation from offsetting scroll on reload */}
      <div className="mb-[-21px] text-transparent" aria-hidden>
        Top
      </div>

      <Header />

      {props.children}

      <OrchestratedReveal asChild delay={0.2}>
        <Footer />
      </OrchestratedReveal>
    </>
  );
}
