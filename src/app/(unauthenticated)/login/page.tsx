import { LogIn } from "lucide-react";
import { Balancer } from "@/components/client-balancer";
import { login } from "@/actions/login";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { OrchestratedReveal } from "@/components/reveal";

function Page() {
  const isLoggedIn = cookies().get("loggedIn")?.value === "true";

  console.log(
    "Login page hit.",
    "Login Status:",
    isLoggedIn ? "Logged in" : "Logged out"
  );
  if (isLoggedIn) {
    console.log("while logged in, redireting to dashboard");
    redirect("/dashboard");
  }

  return (
    <main className="flex flex-1 items-center justify-center">
      <OrchestratedReveal asChild delay={0.1}>
        <form
          className="max-w-xs space-y-8 rounded-2xl bg-gray-100 p-8"
          action={login}
        >
          <h1 className="text-center text-xl">
            <Balancer>Please sign in with your StudentID to continue.</Balancer>
          </h1>

          <div className="space-y-4">
            <label
              htmlFor="username"
              className="block rounded-lg bg-gray-200 p-3 outline-offset-2 focus-within:outline focus-within:outline-2 focus-within:outline-gray-950"
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
              className="block rounded-lg bg-gray-200 p-3 outline-offset-2 focus-within:outline focus-within:outline-2  focus-within:outline-gray-950"
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
      </OrchestratedReveal>
    </main>
  );
}

export default Page;
