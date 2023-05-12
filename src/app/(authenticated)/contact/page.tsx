export const metadata = {
  title: "Contact Us | THS Book Rentals",
};

function Page() {
  return (
    <main className="flex-1 space-y-4 px-8 pt-16 lg:px-32">
      <h1 className="text-center font-display text-4xl">Get in touch.</h1>
      <p className="text-center">
        Call us at&nbsp;
        <a href="tel:8767546219" className="underline">
          876-754-6219
        </a>
        &nbsp; or&nbsp;
        <a href="tel:8767546219" className="underline">
          876-754-6220
        </a>
      </p>
    </main>
  );
}

export default Page;
