import React from 'react'
import Image from 'next/image'
import Navbar from "@/components/Navbar";

export default function Blog() {
  return (
    <main id='blog' className='w-full h-screen md:h-screen sm:h-screen bg-gradient-to-r from-violet-100   via-blue-50 20% to-violet-100 )'>
      <Navbar/>
      <section className='flex justify-center items-center w-full'>
        <article className='w-8/12 grid place-content-center'>
          <h2 className='text-center font-bold text-3xl'>Blog post</h2>
          <div className='flex justify-center'>
            <p className='text-center w-8/12 mt-3'>Blogs are a great method to increase traffic and generate leads. Make a profit. Get compensated for your efforts.</p>
          </div>
        </article>
      </section>

      <section className='w-full flex justify-center items-center mt-32'>
        <article className='w-full h-64 flex justify-center items-center gap-3'>

          <div className='w-72 p-4 border rounded-3xl bg-transparent border-white h-full'>
            <h3 id='article' className='text-xs mb-3 font-bold border border-transparent  border-b-sky-600 pb-3'>Article</h3>
            <p className='font-bold text-[.96rem]'>How do you use social media for growing traffic and sales?</p>
            <figure className='mt-3'>
              <Image className='w-36' src='/blog/image1.png' width={300} height={500} alt='imagen perfil' />
            </figure>
          </div>

          <div className='w-72 p-4 border rounded-3xl bg-transparent border-white h-full'>
            <h3 id='article' className='text-xs mb-3 font-bold border border-transparent  border-b-sky-600 pb-3'>Lifestyle</h3>
            <p className='font-bold text-md'>Health & fitness for busy people during times of stress</p>
            <figure className='mt-3'>
              <Image className='w-36' src='/blog/image2.png' width={300} height={500} alt='imagen perfil' />
            </figure>
          </div>

          <div className='w-72 p-4 border rounded-3xl bg-transparent border-white h-full'>
            <h3 id='article' className='text-xs mb-3 font-bold border border-transparent  border-b-sky-600 pb-3'>CEO / Office</h3>
            <p className='font-bold text-md'>QR codes-innovative ways to use them in small business
            </p>
            <figure className='mt-3'>
              <Image className='w-36' src='/blog/image3.png' width={300} height={500} alt='imagen perfil' />
            </figure>
          </div>

        </article>
      </section>
      <footer className='flex justify-center items-center mt-20'>
        <button id='read' type='button' className='font-semibold text-sm border w-20 h-8 rounded-xl'>View All</button>
      </footer>

    </main>
  )
}