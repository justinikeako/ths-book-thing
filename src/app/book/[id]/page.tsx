import { BookListItem } from "@/components/book-list-item";
import Link from "next/link";

function Page() {
  return (
    <main className="space-y-32 px-32 pb-16 pt-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16 lg:gap-32">
        <section className="aspect-square bg-gray-200 md:sticky md:top-8 md:flex-[2] lg:flex-[3]"></section>
        <section className="space-y-8 md:flex-[3] lg:flex-[4] lg:space-y-12">
          {/* Basic Info */}
          <section className="space-y-2">
            <div>
              <p className="font-display text-lg">
                <Link href={`/catalogue`}>Literature · Harper Lee</Link>
              </p>
              <h1 className="font-display text-4xl">To Kill a Mockingbird</h1>
            </div>
            <div className="flex flex-wrap justify-between gap-8 text-lg">
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
        </section>
      </div>

      <section className="flex flex-col space-y-16">
        <h2 className="font-display max-w-[28ch] self-center text-center text-3xl">
          Other students were interested in:
        </h2>
        <ul className="grid flex-1 grid-cols-3 gap-8">
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
    </main>
  );
}

export default Page;