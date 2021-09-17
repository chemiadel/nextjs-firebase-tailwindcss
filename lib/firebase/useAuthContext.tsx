import { useState, useEffect, useContext, createContext } from 'react'
import { getAuth } from "firebase/auth";
import { onAuthStateChanged, signOut as signout } from "firebase/auth";
import { setCookie, destroyCookie} from 'nookies'

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
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const auth=getAuth()
    onAuthStateChanged(auth, (user : any) => {
        console.log('auth state', user)
        if (user) {
            setAuthUser(user)
            // Set
            user.getIdToken().then(( token : string )=> setCookie(null, 'idToken', token))
        
        }
        if (!user) setAuthUser(null)
        setLoading(false)

      });

  },[])

  return <authUserContext.Provider value={{authUser,loading}}>{children}</authUserContext.Provider>;

}

export const useAuth = () => useContext(authUserContext);

export const signOut = async () => {
  const auth=getAuth()
  destroyCookie(null, 'idToken')
  await signout(auth)

  
} 