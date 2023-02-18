import { useSession, signIn, signOut } from "next-auth/react";

export default function btnLogin() {
  const { data: session } = useSession();
  // console.log("btnlogin", session.user.email);
  if (session) {
    // console.log(session.user.email);
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={signOut}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={signIn}>Sign in</button>
    </>
  );
}
