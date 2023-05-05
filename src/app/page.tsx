import { cookies } from "next/headers";
import { Dashboard } from "./dashboard";
import { Login } from "./login";

export function generateMetadata() {
  const isLoggedIn = cookies().get("loggedIn");

  const title = isLoggedIn ? "Dashboard" : "Login";

  return {
    title: `${title} | THS Book Rentals`,
  };
}

function Page() {
  const isLoggedIn = cookies().get("loggedIn");

  return isLoggedIn ? <Dashboard /> : <Login />;
}

export default Page;
