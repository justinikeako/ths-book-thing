import { Main } from "@/components/main";
import { BookListItem } from "@/components/book-list-item";
import Link from "next/link";
import { formatPrice, formatRestockDate } from "@/lib/utils";
import { Stock, RestockQueue, getBook /* , getBooks */ } from "@/utils/mock-db";
import { OrchestratedReveal, ViewportReveal } from "@/components/reveal";

type PageProps = { params: { id: string } };

export function generateMetadata({ params }: PageProps) {
  const book = getBook(params.id);

  return {
    title: `${book?.title} | THS Book Rentals`,
  };
}

// export function generateStaticParams() {
//   return getBooks().map(({ id }) => ({ id }));
// }

type StockProps = { stock: Stock; restockQueue: RestockQueue };
function Stock({ stock, restockQueue }: StockProps) {
  if (stock.quantity > 0 && stock.quantity <= 15)
    return <p className="text-orange-600">{stock.quantity} copies left</p>;
  if (stock.quantity > 15)
    return <p className="text-lime-600">{stock.quantity} copies available</p>;

  if (restockQueue.length === 0)
    return <p className="text-red-600">Out of stock</p>;
  else
    return (
      <p className="text-yellow-600">
        {formatRestockDate(restockQueue.at(0)?.date)}
      </p>
    );
}

function Page({ params }: PageProps) {
  const book = getBook(params.id);

  return (
    <Main className="space-y-32">
      <section className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16 lg:gap-32">
        <OrchestratedReveal
          delay={0.1}
          className="aspect-square bg-gray-200 bg-contain bg-center bg-no-repeat md:sticky md:top-8 md:flex-[2] lg:flex-[3]"
          style={{ backgroundImage: `url('/${book.id}.png')` }}
        />
        <OrchestratedReveal
          delay={0.2}
          className="space-y-8 md:flex-[3] lg:flex-[4] lg:space-y-12"
        >
          {/* Basic Info */}
          <section className="space-y-2">
            <div>
              <p className="text-lg">
                <Link href={`/catalogue`}>
                  {book.subject} · {book.author}
                </Link>
              </p>
              <h1 className="text-4xl">{book.title}</h1>
            </div>
            <div className="flex flex-wrap justify-between gap-x-8 text-lg">
              <Stock stock={book.stock} restockQueue={book.restockQueue} />
              <p>JMD {formatPrice(book.price)}/year</p>
            </div>
          </section>

          {/* Description */}

          <section className="space-y-2">
            <h2 className="text-lg">Description</h2>

            <p>{book.description}</p>
          </section>

          <div className="flex gap-2">
            <button className="flex w-min items-center gap-1 whitespace-nowrap rounded-full bg-blue-950 px-4 py-2 font-medium text-white">
              <span>Rent Now</span>
            </button>
            <button className="flex w-min items-center gap-1 whitespace-nowrap rounded-full border border-gray-300 px-4 py-2 font-medium text-gray-950">
              <span>Add to Wishlist</span>
            </button>
          </div>
        </OrchestratedReveal>
      </section>

      <ViewportReveal asChild>
        <section className="flex flex-col space-y-16">
          <h2 className="max-w-[28ch] self-center text-center text-3xl">
            Other students were interested in:
          </h2>
          <ul className="grid flex-1 grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-3">
            {book.related.map((relatedBook) => (
              <BookListItem
                title={relatedBook.title}
                price={relatedBook.price}
                bookId={relatedBook.id}
              />
            ))}
          </ul>
        </section>
      </ViewportReveal>
    </Main>
  );
}

export default Page;
