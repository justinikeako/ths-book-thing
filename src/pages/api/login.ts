import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.query as {
    username: string;
    password: string;
  };

  console.log(req.query);

  if (username === "justinikeako" && password === "12345678") {
    res.setHeader("set-cookie", `loggedIn=true; path=/; samesite=lax;`);
    res.redirect("/");
  } else {
    res.redirect("/");
  }
}
