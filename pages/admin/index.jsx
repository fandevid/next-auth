import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import LoginButton from "@/components/LoginButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log(session);
  return {
    props: { user: session?.user ?? null },
  };
}

const admin = ({ user }) => {
  const router = useRouter();
  console.log(user);
  // if (!session)
  //   return (
  //     <div>
  //       Anda tidak memiliki izin ke halaman admin silahkan login dulu
  //       <button onClick={signIn}>Login</button>
  //     </div>
  //   );
  return (
    <div className="">
      <img
        src={user?.image ?? "https://olshop.vercel.app/img/beat.jpeg"}
        alt=""
      />
      <h1>Halaman admin</h1>

      {user ? <h4>Welcome {user.name}</h4> : "Anda bleum Login"}
      <LoginButton />
    </div>
  );
};

export default admin;
