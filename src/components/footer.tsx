import Link from "next/link";
import { forwardRef } from "react";

const Footer = forwardRef<HTMLElement>(function Footer(_, ref) {
  return (
    <footer
      ref={ref}
      className="flex flex-wrap items-center justify-between px-4 py-4 xs:px-8 sm:px-16 md:px-24 md:py-6 lg:px-32 lg:py-6"
    >
      <p>Copyright &copy; {new Date().getFullYear()} Tarrant High School</p>
      <p>
        Created by&nbsp;
        <Link href="https://notprimitive.com" className="underline">
          Justin Ikeako
        </Link>
      </p>
    </footer>
  );
});

export { Footer };
