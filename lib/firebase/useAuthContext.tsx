import { useState, useEffect, useContext, createContext } from 'react'
import { getAuth } from "firebase/auth";
import { onAuthStateChanged, signOut as signout } from "firebase/auth";
import { setCookie, destroyCookie} from 'nookies'
import {useRouter} from 'next/router'

type Props = {
  children: React.ReactNode;
};

type UserContext ={
  authUser: any,
  loading: boolean
}

const authUserContext = createContext<UserContext>({
    authUser: null,
    loading: true
});

export default function  AuthContextProvider({children} : Props) {
  const [authUser, setAuthUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const auth=getAuth()
    onAuthStateChanged(auth, (user) => {
        console.log('auth state', user)
        if (user) {
            setAuthUser(user)
            // Set
            user.getIdToken().then(( token )=> setCookie(null, 'idToken', token))
        
        }
        if (!user) setAuthUser(null)
        setLoading(false)

      });

  },[])

  return <authUserContext.Provider value={{authUser,loading}}>{children}</authUserContext.Provider>;

}

export const useAuth = () => useContext(authUserContext);

export const signOut = async (ctx : any) => {
  const auth=getAuth()
  destroyCookie(null, 'idToken')
  await signout(auth)

  
} 