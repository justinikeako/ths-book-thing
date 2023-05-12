import React from "react";
import Link from "next/link";
import { Balancer } from "@/components/client-balancer";
import { ChevronRight, List } from "lucide-react";
import { cn } from "@/lib/utils";
import { Main } from "@/components/main";
import { authGatewayRedirect } from "../auth-redirect";

export const metadata = {
  title: "Dashboard | THS Book Rentals",
};

type BookOrderStatus = "ready" | "pending" | "delayed";

type Book = {
  id: string;
  title: string;
  pickupStatus: BookOrderStatus;
};

const books: Book[] = [
  {
    id: "maths_complete",
    title: "Mathematics A complete course with CXC Questions",
    pickupStatus: "ready",
  },
  {
    id: "achieve_english",
    title:
      "Achieve! A complete English course for CSEC English A examination: 2nd Edition",
    pickupStatus: "ready",
  },
  {
    id: "to_kill_a_mocking_bird",
    title: "To Kill a Mockingbird",
    pickupStatus: "pending",
  },
  {
    id: "dime_mucho",
    title: "Dime Mucho 1st Edition Student's Book 2",
    pickupStatus: "delayed",
  },
];

function Page() {
  authGatewayRedirect();

  return (
    <Main className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6">
      <div className="flex items-center justify-center py-4 sm:py-8 md:col-span-2 lg:col-span-1 lg:h-80 lg:px-8 xl:col-span-3">
        <h1 className="!text-center text-4xl">Good Morning, Justin.</h1>
      </div>

      <div
        className="flex h-80 items-end rounded-3xl bg-gray-100 bg-cover p-8 text-white xl:col-span-3"
        style={{
          backgroundImage:
            "linear-gradient(to top, #0008 30%, #0000), url('/studying.png')",
        }}
      >
        <div className="flex w-full flex-col items-start justify-between gap-4 xl:flex-row xl:items-center">
          <div className="space-y-1">
            <h2 className="text-xl">Get a head start this year.</h2>
            <p>
              <Balancer ratio={0.5}>
                Order all the books you need for the school year in just a few
                seconds.
              </Balancer>
            </p>
          </div>
          <Link
            href="/catalogue"
            className="whitespace-nowrap rounded-full bg-white px-4 py-2 font-medium text-gray-950"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div
        className="flex h-80 flex-col items-center justify-center gap-4 rounded-3xl bg-gray-100 bg-cover text-center text-white xl:col-span-2"
        style={{
          backgroundImage:
            "linear-gradient(to top, #0008, #0008), url('/bookshelf.png')",
        }}
      >
        <div className="space-y-1">
          <h2 className="text-xl">Textbook Catalogue</h2>
          <p>
            <Balancer ratio={0.5}>
              We have a wide selection of textbooks for your academic needs.
            </Balancer>
          </p>
        </div>
        <Link
          href="/catalogue"
          className="whitespace-nowrap rounded-full bg-white px-4 py-2 font-medium text-gray-950"
        >
          Explore
        </Link>
      </div>

      <Card title="Rental Pickups">
        <ul>
          {books.map((book) => (
            <BookListItem key={book.id} {...book} />
          ))}
        </ul>
      </Card>
      <Card title="Outstanding Rentals">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center text-gray-400">
          <List />
          <p className="max-w-[40ch]">
            <Balancer>
              If you have any rental books which you have not yet turned, they
              in will appear here.
            </Balancer>
          </p>
        </div>
      </Card>
    </Main>
  );
}

type CardProps = React.PropsWithChildren<{
  title: string;
}>;

function Card({ title, children }: CardProps) {
  return (
    <div className="flex h-80 flex-col rounded-3xl bg-gray-100 xl:col-span-2">
      <div className="flex items-center justify-between px-8 pb-2 pt-6">
        <h2 className="text-lg">{title}</h2>
        {/* <p>See All</p> */}
      </div>

      <div className="flex-1 px-8 pb-6 pt-2">{children}</div>
    </div>
  );
}

function BookListItem({ id, title, pickupStatus }: Book) {
  const formattedPickupStatus: { [key in BookOrderStatus]: string } = {
    ready: "Ready for pickup",
    pending: "Order Pending",
    delayed: "Pickup on Sep 29th",
  };

  return (
    <li className="-mx-2 flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-gray-200 active:bg-gray-300">
      <Link href={`/book/${id}`} className="contents">
        <div
          className="bg- relative h-8 w-8 shrink-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/${id}.png')` }}
        />
        <div className="w-[calc(100%-6rem)] flex-1 select-none">
          <p className="w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
            {title}
          </p>
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "h-2 w-2 rounded-full",
                pickupStatus === "ready" && "bg-green-500",
                pickupStatus === "pending" && "bg-yellow-500",
                pickupStatus === "delayed" && "bg-orange-500"
              )}
            />
            <p className="text-sm">{formattedPickupStatus[pickupStatus]}</p>
          </div>
        </div>
        <ChevronRight className="shrink-0" strokeWidth={1} />
      </Link>
    </li>
  );
}

export default Page;
