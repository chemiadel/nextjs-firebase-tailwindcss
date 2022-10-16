import { useState, useEffect, useContext, createContext } from "react";
import { getAuth, onAuthStateChanged, signOut as signout } from "firebase/auth";
import { setCookie, destroyCookie } from "nookies";

export type TIdTokenResult = {
  token: string;
  expirationTime: string;
  authTime: string;
  issuedAtTime: string;
  signInProvider: string | null;
  signInSecondFactor: string | null;
  claims: {
    [key: string]: any;
  };
};

type Props = {
  children: React.ReactNode;
};

type UserContext = {
  user: TIdTokenResult | null;
  loading: boolean;
};

const authContext = createContext<UserContext>({
  user: null,
  loading: true,
});

export default function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<TIdTokenResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      //user returned from firebase not the state
      if (user) {
        // Save token for backend calls
        user.getIdToken().then((token) =>
          setCookie(null, "idToken", token, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          })
        );

        // Save decoded token on the state
        user.getIdTokenResult().then((result) => setUser(result));
      }
      if (!user) setUser(null);
      setLoading(false);
    });
  }, []);

  return (
    <authContext.Provider value={{ user, loading }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);

export const signOut = async () => {
  const auth = getAuth();
  destroyCookie(null, "idToken");
  await signout(auth);
};
