import React from 'react'
import { Link } from "react-router"

function Home() {
  return (
    <section className='container flex flex-col justify-center items-center min-h-screen'>
        <article className='bg-white px-10 py-10 flex flex-col justify-center items-center gap-4  rounded-md'>
            <h1 className='text-3xl'>Gestion des naissances</h1>
            
            <Link to= {"/private/declarations"} className='border border-blue-600 text-blue-600 px-6 py-4 rounded-md hover:bg-blue-600 hover:text-white gap-2 transition-colors'>Déclaration</Link>
        </article>
    </section>
  )
}

export default Home