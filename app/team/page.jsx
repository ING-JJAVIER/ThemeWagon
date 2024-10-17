import React from 'react'
import Image from 'next/image'
import Navbar from "@/components/Navbar";

export default function Team() {
  return (
    <main id='team' className='w-full h-screen'>
      <Navbar/>
      <section className='flex justify-center items-center w-full'>
        <article className='w-8/12 grid place-content-center'>
          <h2 className='text-center font-bold text-3xl'>Our team</h2>
          <div className='flex justify-center'>
            <p className='text-center w-8/12 mt-3'>People from various origins, cultures, and personalities make up our team. This blend makes it a powerful team.</p>
          </div>
        </article>
      </section>

      <section className='w-full flex justify-center items-center mt-20'>
        <article className='w-8/12 flex justify-center '>

          <div className='flex justify-center items-center gap-4'>
            <figure className='flex  flex-wrap justify-center items-center w-40'>
              <Image src='/team/image1.png' width='200' height='300' alt='photo of John Adams' />
              <caption className='w-24'>John Adams <span>CEO</span> </caption>
            </figure>

            <figure className='flex  flex-wrap justify-center items-center w-40'>
              <Image src='/team/image2.png' width='200' height='300' alt='photo of Carrey Johnson' />
              <caption className='w-32'>Carrey Johnson <span>Senior Develper</span> </caption>
            </figure>

            <figure className='flex  flex-wrap justify-center items-center w-40'>
              <Image src='/team/image3.png' width='200' height='300' alt='photo of Ray Marie' />
              <caption className='w-24'>Ray Marie <span>Developer</span> </caption>
            </figure>

            <figure className='flex  flex-wrap justify-center items-center w-40'>
              <Image src='/team/image4.png' width='200' height='300' alt='photo of Austin Min' />
              <caption className='w-24'>Austin Min <span>Designer</span> </caption>
            </figure>

          </div>

        </article>

      </section>

      <footer className='flex justify-center items-center mt-10'>
        <button id='read' type='button' className='font-semibold text-sm border w-32 h-8 rounded-xl'>View Full Team</button>
      </footer>
    </main>
  )
}