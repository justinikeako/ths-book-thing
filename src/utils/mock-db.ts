import { addDays } from "date-fns";

export type Stock = { quantity: number };
export type RestockQueue = { quantity: number; date: Date }[];

export type Book = {
  id: string;
  subject: string;
  author: string;
  title: string;
  description: string;
  unit: string;
  displayUnits: [string, string];
  price: number;
  stock: Stock;
  restockQueue: RestockQueue;
};

const BOOKS: Book[] = [
  {
    id: "maths_complete",
    subject: "Mathematics",
    author: "Harper Lee",
    title: "Mathematics A complete course with CXC Questions",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus odio sunt iure corrupti! Ex quia, fugit quidem alias corporis nihil delectus deleniti dolore minima rem molestiae totam! Quod, culpa!",
    price: 4200,
    unit: "copy",
    displayUnits: ["copy", "copies"],
    stock: { quantity: 3 },
    restockQueue: [],
  },
  {
    id: "achieve_english",
    subject: "English",
    author: "Harper Lee",
    title:
      "Achieve! A complete English course for CSEC English A examination: 2nd Edition",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus odio sunt iure corrupti! Ex quia, fugit quidem alias corporis nihil delectus deleniti dolore minima rem molestiae totam! Quod, culpa!",
    unit: "copy",
    price: 3500,
    displayUnits: ["copy", "copies"],
    stock: { quantity: 0 },
    restockQueue: [{ quantity: 50, date: addDays(new Date(), 7) }],
  },
  {
    id: "to_kill_a_mocking_bird",
    subject: "English Literature",
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    description:
      '"To Kill a Mockingbird" is a classic American novel about a young girl named Scout, her fascination with her mysterious neighbor Boo Radley, and her father\'s defense of a black man falsely accused of rape in a small Southern town. The book explores themes of prejudice, social inequality, and the importance of compassion and standing up for what is right.',
    price: 2200,
    unit: "copy",
    displayUnits: ["copy", "copies"],
    stock: { quantity: 45 },
    restockQueue: [],
  },
  {
    id: "dime_mucho",
    subject: "Spanish",
    author: "Harper Lee",
    title: "Dime Mucho 1st Edition Student's Book 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus odio sunt iure corrupti! Ex quia, fugit quidem alias corporis nihil delectus deleniti dolore minima rem molestiae totam! Quod, culpa!",
    price: 2700,
    unit: "copy",
    displayUnits: ["copy", "copies"],
    stock: { quantity: 0 },
    restockQueue: [],
  },
];

export function getBooks() {
  return BOOKS;
}

export function getBook(bookId: string) {
  const book = BOOKS.find(({ id }) => id === bookId);

  if (!book) return notFound();

  return { ...book, related: BOOKS.filter(({ id }) => id !== bookId) };
}
