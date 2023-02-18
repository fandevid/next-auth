import { getServerSession } from "next-auth/next";
// import { authOptions } from "@p/auth/[...nextauth]";
import { authOptions } from "../auth/[...nextauth]";

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    res.status(200).send({
      content: "Kamu boleh mengakses uni karena kamu sudah login.",
    });
  } else {
    res.status(301).send({
      error: "Kamu harus login dulu sayy.",
    });
  }
};
