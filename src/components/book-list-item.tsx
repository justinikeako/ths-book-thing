import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type BookListItemProps = {
  title: string;
  price: number;
  bookId: string;
};

export function BookListItem({ title, price, bookId }: BookListItemProps) {
  return (
    <li className="col-span-1 space-y-4">
      <div
        className="aspect-square bg-gray-300 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/${bookId}.png')` }}
      />
      <div>
        <p className="text-lg">{title}</p>
        <p className="mt-2">JMD{formatPrice(price)}/year</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button className="whitespace-nowrap rounded-full bg-blue-950 px-4 py-2 font-medium text-white">
            Rent Now
          </button>
          <Link
            href={`/book/${bookId}`}
            className="whitespace-nowrap rounded-full border border-gray-300 px-4 py-2 font-medium"
          >
            Learn More
          </Link>
        </div>
      </div>
    </li>
  );
}
