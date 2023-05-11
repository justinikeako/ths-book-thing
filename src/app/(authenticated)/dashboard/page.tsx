import React from "react";
import Link from "next/link";
import { Balancer } from "@/components/client-balancer";
import { ChevronRight, List } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Dashboard | THS Book Rentals",
};

function Page() {
  return (
    <main className="grid grid-flow-row grid-cols-1 gap-4 px-8 py-4 md:grid-cols-2 md:px-24 md:py-12 lg:grid-cols-6 lg:px-32 lg:py-16">
      <div className="flex items-center justify-center py-4 md:py-24 lg:col-span-3 lg:h-80">
        <h1 className="!text-center text-4xl">
          <Balancer>Good Morning, Justin.</Balancer>
        </h1>
      </div>

      <div className="flex h-80 items-end rounded-3xl bg-gray-100 p-8 lg:col-span-3">
        <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-xl">Get a head start this year.</h2>
            <p>
              <Balancer ratio={0.5}>
                Order all the books you need for the school year in just a few
                seconds.
              </Balancer>
            </p>
          </div>
          <button className="whitespace-nowrap rounded-full bg-gray-950 px-4 py-2 text-white">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex h-80 flex-col items-center justify-center gap-4 rounded-3xl bg-gray-100 text-center lg:col-span-2">
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
          className="whitespace-nowrap rounded-full bg-gray-950 px-4 py-2 text-white"
        >
          Explore
        </Link>
      </div>

      <Card title="Rental Pickups">
        <ul>
          <BookListItem
            title="Mathematics A complete course with CXC Questions"
            pickupStatus="ready"
          />
          <BookListItem
            title="Achieve! A complete English course for CSEC English A examination: 2nd Edition"
            pickupStatus="ready"
          />
          <BookListItem title="To Kill a Mockingbird" pickupStatus="pending" />
          <BookListItem
            title="Dime Mucho 1st Edition Student's Book 2"
            pickupStatus="delayed"
          />
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
    </main>
  );
}

type CardProps = React.PropsWithChildren<{
  title: string;
}>;

function Card({ title, children }: CardProps) {
  return (
    <div className="flex h-80 flex-col rounded-3xl bg-gray-100 lg:col-span-2">
      <div className="flex items-center justify-between px-8 pb-2 pt-6">
        <h2 className="text-lg">{title}</h2>
        {/* <p>See All</p> */}
      </div>

      <div className="flex-1 px-8 pb-6 pt-2">{children}</div>
    </div>
  );
}

type BookOrderStatus = "ready" | "pending" | "delayed";

type BookListItemProps = {
  title: string;
  pickupStatus: BookOrderStatus;
};

function BookListItem({ title, pickupStatus }: BookListItemProps) {
  const formattedPickupStatus: { [key in BookOrderStatus]: string } = {
    ready: "Ready for pickup",
    pending: "Order Pending",
    delayed: "Pickup on Sep 29th",
  };

  return (
    <li className="-mx-2 flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-gray-200 active:bg-gray-300">
      <div className="h-8 w-8 shrink-0 bg-gray-300" />
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
    </li>
  );
}

export default Page;
