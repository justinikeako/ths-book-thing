import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function Page() {
  const isLoggedIn = cookies().get("loggedIn")?.value === "true";

  if (isLoggedIn) {
    console.log("Logged in, redirecting to dashboard");
    redirect("/dashboard");
  } else {
    console.log("Not logged in, redirecting to login");
    redirect("/login");
  }
}

export default Page;
