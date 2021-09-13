import { useAuth,signOut } from '../../lib/firebase/useAuthContext'
import { getAuth } from "firebase/auth";
import Link from 'next/link'

export default function Header(props : any){
    const { authUser, loading} = useAuth()
    
    const auth = getAuth()

    return <div className="flex h-full flex-row">

        <div className="flex-1 my-auto">
        <Link href='/'>
            <button >Home</button>
        </Link>
        </div>

        <div className="m-auto space-x-2">

        {!authUser && !loading? 
        <>
        <Link href='/signup'><button className="m-auto"> Signup</button></Link>

        <Link href='/signin'><button className="m-auto"> Signin</button></Link>
        </>
        :null}
        {authUser?<>
        
        <Link href='/privatessr'><button > PrivateSSR</button></Link>

        <Link href='/private'><button > Private</button></Link>

        <button onClick={()=>signOut(auth)}> Signout</button>
        
        </>:null}

        </div>
    </div>
}