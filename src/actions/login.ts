"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const username = formData.get("username"),
    password = formData.get("password");

  if (username === "justinikeako" && password === "12345678") {
    cookies().set("loggedIn", "true", {
      path: "/",
      sameSite: "lax",
    });

    console.log("Successfully logged in");

    revalidatePath("/contact");
    redirect("/");
  } else {
    console.error(
      `Either username "${username}" or password "${password}" are incorrect`
    );
    redirect("/");
  }
}
