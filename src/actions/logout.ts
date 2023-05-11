"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  cookies().delete("loggedIn");

  console.log("Successfully logged out");

  console.log("Redirecting to login");
  revalidatePath("/contact");
  redirect("/login");
}
