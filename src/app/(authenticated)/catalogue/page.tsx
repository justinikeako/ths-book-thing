import { Check, SlidersHorizontal, X } from "lucide-react";
import React from "react";
import { BookListItem } from "@/components/book-list-item";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/sheet";
import { authGatewayRedirect } from "../auth-redirect";
import { Main } from "@/components/main";
import { getBooks } from "@/utils/mock-db";
import { OrchestratedReveal } from "@/components/reveal";

export const metadata = {
  title: "Book Catalogue | THS Book Rentals",
};

function Page() {
  authGatewayRedirect();

  const books = getBooks();

  return (
    <Main>
      <OrchestratedReveal asChild delay={0.1}>
        <h1 className="text-4xl">Book Catalogue</h1>
      </OrchestratedReveal>
      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <OrchestratedReveal
          delay={0.2}
          className="-ml-6 hidden shrink-0 basis-72 space-y-6 rounded-3xl bg-gray-100 p-6 lg:block"
        >
          <h2 className="text-lg">Book Filters</h2>

          <div className="space-y-2">
            <h3 className="text-base font-medium">Rental price range</h3>
            <div className="flex gap-2">
              <label className="flex flex-1 gap-1 rounded-lg bg-gray-200 p-3 pr-0 outline-2 outline-offset-2 outline-gray-950  focus-within:outline">
                <span className="text-gray-500">Min: $</span>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full flex-1 bg-transparent outline-none"
                />
              </label>
              <label className="flex flex-1 gap-1 rounded-lg bg-gray-200 p-3 pr-0 outline-2 outline-offset-2 outline-gray-950  focus-within:outline">
                <span className="text-gray-500">Max: $</span>
                <input
                  type="number"
                  placeholder="∞"
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
        </OrchestratedReveal>

        <OrchestratedReveal
          delay={0.2}
          className="no-scrollbar -mx-8 flex gap-2 overflow-auto px-8 lg:hidden"
        >
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex shrink-0 items-center gap-1 self-start whitespace-nowrap rounded-full border border-gray-300 p-3 font-medium hover:bg-gray-100 active:bg-gray-200 lg:hidden">
                <SlidersHorizontal className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </SheetTrigger>
            <SheetContent position="bottom" size="lg">
              <SheetHeader>
                <SheetTitle>Book Filters</SheetTitle>

                <SheetClose className="-mr-2 rounded-full p-2 hover:bg-gray-100 active:bg-gray-200">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </SheetHeader>
              <SheetBody className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-base font-medium">Rental price range</h3>
                  <div className="flex gap-2">
                    <label className="flex flex-1 gap-1 rounded-lg bg-gray-200 p-3 pr-0 outline-2 outline-offset-2 outline-gray-950  focus-within:outline">
                      <span className="text-gray-500">Min: $</span>
                      <input
                        type="number"
                        placeholder="0"
                        className="w-full flex-1 bg-transparent outline-none"
                      />
                    </label>
                    <label className="flex flex-1 gap-1 rounded-lg bg-gray-200 p-3 pr-0 outline-2 outline-offset-2 outline-gray-950  focus-within:outline">
                      <span className="text-gray-500">Max: $</span>
                      <input
                        type="number"
                        placeholder="∞"
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
              </SheetBody>
            </SheetContent>
          </Sheet>

          <button className="flex shrink-0 items-center gap-2 self-start whitespace-nowrap rounded-full border border-gray-300 p-3 font-medium hover:bg-gray-100 active:bg-gray-200">
            <span>Grade 10</span>
            <X className="h-5 w-5" />
          </button>
          <button className="flex shrink-0 items-center gap-2 self-start whitespace-nowrap rounded-full border border-gray-300 p-3 font-medium hover:bg-gray-100 active:bg-gray-200">
            <span>All Subjects</span>
            <X className="h-5 w-5" />
          </button>
        </OrchestratedReveal>
        <OrchestratedReveal delay={0.3}>
          <ul className="grid flex-1 grid-cols-1 gap-8 xs:grid-cols-2 xs:gap-4 md:grid-cols-3 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 2xl:grid-cols-4">
            {books.map((relatedBook) => (
              <BookListItem
                title={relatedBook.title}
                price={relatedBook.price}
                bookId={relatedBook.id}
              />
            ))}
          </ul>
        </OrchestratedReveal>
      </div>
    </Main>
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
