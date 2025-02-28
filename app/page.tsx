'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {

  const router = useRouter();

  const navigate = (page:string) => {
    router.push(page)
  }
  return (
    <section>
      <h1>useRouter</h1>
      <Link href='/projects'> Projects</Link>
      <br/>
      <button 
        className='border px-2 py-4'
        onClick={() => navigate("about")}>Go to About Page</button>
      <button 
        className='border px-2 py-4'
        onClick={() => navigate("login")}>Go to Login Page</button>
        
    </section>
  )
}

export default Home