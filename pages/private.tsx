import type { NextPage } from 'next'
import Head from 'next/head'
import { useAuth } from '../lib/useAuthContext'

const Home: NextPage = () => {
  const { authUser, loading} = useAuth()

  if(loading) return <h1>Loading...</h1>

  if(!authUser) return <h1>U need to login</h1>

  return (
    <>
      <Head>
        <title>Private</title>
      </Head>

      <main>
      <h1>Email : {authUser?.email}</h1>
      Private
      </main>
    </>
  )
}

export default Home
