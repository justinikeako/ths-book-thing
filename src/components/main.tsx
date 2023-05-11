import { cn } from "@/lib/utils";

type MainProps = React.PropsWithChildren<{
  className?: string;
}>;

function Main({ className, children }: MainProps) {
  return (
    <main
      className={cn(
        "px-4 py-4 xs:px-8 sm:px-16 md:px-24 md:py-12 lg:px-32 lg:py-16",
        className
      )}
    >
      {children}
    </main>
  );
}

export { Main };
