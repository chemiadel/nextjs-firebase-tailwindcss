import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { authServer } from '../lib/session'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user=await authServer(ctx)

  console.log('userSSR',user)
  return { props: { user } }
}


const Home: NextPage = ({user} : any) => {

  if(!user) return <h1>U need to login</h1>

  return (
    <>
      <Head>
        <title>Private SSR</title>
      </Head>

      <main>
      <h1>Email : {user.email}</h1>
      Private with SSR
      </main>
    </>
  )
}

export default Home
