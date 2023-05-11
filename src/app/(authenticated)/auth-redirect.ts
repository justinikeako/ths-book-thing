import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export function authGatewayRedirect() {
  const isLoggedIn = cookies().get("loggedIn")?.value === "true";

  if (!isLoggedIn) redirect("/login");
}
