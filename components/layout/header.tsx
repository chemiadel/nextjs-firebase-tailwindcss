import { useAuth, signOut } from "../../lib/authContext";
import Link from "next/link";

export default function Header(props: any) {
  const { user, loading } = useAuth();

  return (
    <div className="flex h-full flex-row">
      <div className="flex-1 my-auto">
        <Link href="/">
          <button>Home</button>
        </Link>
      </div>

      <div className="m-auto space-x-2">
        {!user && !loading ? (
          <>
            <Link passHref href="/signup">
              <button className="m-auto"> Signup</button>
            </Link>

            <Link passHref href="/signin">
              <button className="m-auto"> Signin</button>
            </Link>
          </>
        ) : null}
        {user ? (
          <>
            <Link href="/privatessr">
              <button> PrivateSSR</button>
            </Link>

            <Link href="/private">
              <button> Private</button>
            </Link>

            <button onClick={signOut}> Signout</button>
          </>
        ) : null}
      </div>
    </div>
  );
}
