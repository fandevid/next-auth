import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import LoginButton from "@/components/LoginButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  return {
    props: { session },
  };
}

const admin = ({ session }) => {
  const router = useRouter();
  console.log(session);
  // if (!session)
  //   return (
  //     <div>
  //       Anda tidak memiliki izin ke halaman admin silahkan login dulu
  //       <button onClick={signIn}>Login</button>
  //     </div>
  //   );
  return (
    <div className="">
      <h1>Halaman admin : </h1>
      <LoginButton />
    </div>
  );
};

export default admin;
