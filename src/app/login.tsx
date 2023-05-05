import { LogIn } from "lucide-react";
import Balancer from "react-wrap-balancer";

export const metadata = {
  title: "Login | THS Book Rentals",
};

function Login() {
  return (
    <main className="flex flex-1 items-center justify-center">
      <form
        className="w-80 space-y-8 rounded-2xl bg-gray-100 p-8"
        action="/api/login"
      >
        <h1 className="text-center text-xl">
          <Balancer>Please sign in with your StudentID to continue.</Balancer>
        </h1>

        <div className="space-y-4">
          <label
            htmlFor="username"
            className="block rounded-lg bg-gray-200 p-3 focus-within:outline focus-within:outline-1 focus-within:outline-gray-950"
          >
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="bg-transparent outline-none"
            />
          </label>
          <label
            htmlFor="password"
            className="block rounded-lg bg-gray-200 p-3 focus-within:outline focus-within:outline-1 focus-within:outline-gray-950"
          >
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="bg-transparent outline-none"
            />
          </label>
        </div>
        <button
          type="submit"
          className="flex w-min items-center gap-1 whitespace-nowrap rounded-full bg-blue-950 px-4 py-2 font-medium text-white"
        >
          <span>Sign In</span>
          <LogIn className="h-5 w-5" />
        </button>
      </form>
    </main>
  );
}

export { Login };
