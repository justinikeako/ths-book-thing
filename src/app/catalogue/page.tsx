import { Check } from "lucide-react";
import React from "react";
import { BookListItem } from "@/components/book-list-item";

export const metadata = {
  title: "Book Catalogue | THS Book Rentals",
};

function Page() {
  return (
    <div className="px-32 py-8">
      <h1 className="text-4xl">Book Catalogue</h1>
      <div className="mt-8 flex gap-8">
        <div className="w-72 space-y-6 rounded-3xl bg-gray-100 p-6">
          <h2 className="text-lg">Book Filters</h2>

          <div className="space-y-2">
            <h3 className="text-base font-medium">Rental price range</h3>
            <div className="flex gap-2">
              <label className="flex flex-1 gap-1 rounded-lg bg-gray-200 p-3 focus-within:outline-1">
                <span className="text-gray-500">$</span>
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full flex-1 bg-transparent outline-none"
                />
              </label>
              <label className="flex flex-1 gap-1 rounded-lg bg-gray-200 p-3 focus-within:outline-1">
                <span className="text-gray-500">$</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full flex-1 bg-transparent outline-none"
                />
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-medium">Grade level</h3>
            <ul>
              <RadioFilter fieldName="grade" value="7">
                7th grade
              </RadioFilter>
              <RadioFilter fieldName="grade" value="8">
                8th grade
              </RadioFilter>
              <RadioFilter fieldName="grade" value="9">
                9th grade
              </RadioFilter>
              <RadioFilter fieldName="grade" value="10">
                10th grade
              </RadioFilter>
              <RadioFilter fieldName="grade" value="11" defaultChecked>
                11th grade
              </RadioFilter>
              <RadioFilter fieldName="grade" value="12">
                12th grade
              </RadioFilter>
              <RadioFilter fieldName="grade" value="13">
                13th grade
              </RadioFilter>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-medium">Subject</h3>
            <ul>
              <RadioFilter fieldName="subject" value="all" defaultChecked>
                All
              </RadioFilter>
              <RadioFilter fieldName="subject" value="mathematics">
                Mathematics
              </RadioFilter>
              <RadioFilter fieldName="subject" value="english">
                English
              </RadioFilter>
              <RadioFilter fieldName="subject" value="literature">
                English Literature
              </RadioFilter>
              <RadioFilter fieldName="subject" value="chemistry">
                Chemistry
              </RadioFilter>
              <RadioFilter fieldName="subject" value="biology">
                Biology
              </RadioFilter>
              <RadioFilter fieldName="subject" value="it">
                Information Technology
              </RadioFilter>
              <RadioFilter fieldName="subject" value="spanish">
                Spanish
              </RadioFilter>
            </ul>
          </div>
        </div>

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
          <BookListItem
            title="To Kill a Mockingbird"
            price={2200}
            bookId="english"
          />
        </ul>
      </div>
    </div>
  );
}

type RadioFilterProps = React.PropsWithChildren<{
  fieldName: string;
  value: string;
  defaultChecked?: boolean;
}>;

function RadioFilter({
  fieldName,
  value,
  defaultChecked,
  children,
}: RadioFilterProps) {
  const id = value;

  return (
    <li>
      <label
        htmlFor={id}
        className="-mx-4 flex items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-200 active:bg-gray-300"
      >
        <input
          type="radio"
          id={id}
          name={fieldName}
          defaultChecked={defaultChecked}
          value={value}
          className="peer hidden"
        />

        <span className="select-none">{children}</span>
        <Check className="hidden h-4 w-4 peer-checked:block peer-checked:stroke-blue-950" />
      </label>
    </li>
  );
}

export default Page;
