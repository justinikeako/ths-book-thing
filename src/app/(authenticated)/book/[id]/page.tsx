import { BookListItem } from "@/components/book-list-item";
import Link from "next/link";
import { authGatewayRedirect } from "../../auth-redirect";
import { Main } from "@/components/main";

export const metadata = {
  title: "To Kill a Mockingbird | THS Book Rentals",
};

function Page() {
  authGatewayRedirect();

  return (
    <Main className="space-y-32">
      <section className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16 lg:gap-32">
        <section className="aspect-square bg-gray-200 md:sticky md:top-8 md:flex-[2] lg:flex-[3]"></section>
        <section className="space-y-8 md:flex-[3] lg:flex-[4] lg:space-y-12">
          {/* Basic Info */}
          <section className="space-y-2">
            <div>
              <p className="text-lg">
                <Link href={`/catalogue`}>Literature · Harper Lee</Link>
              </p>
              <h1 className="text-4xl">To Kill a Mockingbird</h1>
            </div>
            <div className="flex flex-wrap justify-between gap-x-8 text-lg">
              <p className="text-orange-600">3 copies left</p>
              <p>JMD $2,200/year</p>
            </div>
          </section>

          {/* Description */}

          <section className="space-y-2">
            <h2 className="text-lg">Description</h2>

            <p>
              &quot;To Kill a Mockingbird&quot; is a classic American novel
              about a young girl named Scout, her fascination with her
              mysterious neighbor Boo Radley, and her father&apos;s defense of a
              black man falsely accused of rape in a small Southern town. The
              book explores themes of prejudice, social inequality, and the
              importance of compassion and standing up for what is right.
            </p>
          </section>

          <div className="flex gap-2">
            <button className="flex w-min items-center gap-1 whitespace-nowrap rounded-full bg-blue-950 px-4 py-2 font-medium text-white">
              <span>Rent Now</span>
            </button>
            <button className="flex w-min items-center gap-1 whitespace-nowrap rounded-full border border-gray-300 px-4 py-2 font-medium text-blue-950">
              <span>Add to Wishlist</span>
            </button>
          </div>
        </section>
      </section>

      <section className="flex flex-col space-y-16">
        <h2 className="max-w-[28ch] self-center text-center text-3xl">
          Other students were interested in:
        </h2>
        <ul className="grid flex-1 grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-3">
          <BookListItem
            title="Achieve! A complete English course for CSEC English A examination: 2nd Edition"
            price={3500}
            bookId="english"
          />
          <BookListItem
            title="Dime Mucho 1st Edition Student's Book 2"
            price={2700}
            bookId="spanish"
          />
          <BookListItem
            title="Mathematics A complete course with CXC Questions"
            price={4200}
            bookId="mathematics"
          />
        </ul>
      </section>
    </Main>
  );
}

export default Page;
