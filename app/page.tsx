"use client"
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Page = () => {

  const { data: session } = useSession()

  if(session){
   return(
    <>
      Signed in as { session.user?.email } <br/>
      <button style={{width: 100, backgroundColor: 'pink'}} onClick={() => signOut()}>Sign Out</button>
    </>
   )
  }

  return (
    <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign In</button>
    </>
  )
}

export default Page