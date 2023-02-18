import React from "react";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export async function getServerSideProps(context) {
  const { calbackUrl } = context.query;
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) return { redirect: { destination: calbackUrl ?? "/" } };

  return { props: {} };
}

const login = ({ calbackUrl }) => {
  return (
    <div>
      <h4>Login Dengan?</h4>
      <button
        onClick={() => {
          signIn("github");
        }}
      >
        Github
      </button>
      <br />
      <button
        onClick={() => {
          signIn("google");
        }}
      >
        Google
      </button>
      <br />
      <button>Facebook</button>
      <br />
      <button>Twitter</button>
    </div>
  );
};

export default login;
