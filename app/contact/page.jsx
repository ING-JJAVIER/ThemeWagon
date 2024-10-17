import React from 'react'
import Image from 'next/image'

export default function Contact() {
  return (
    <>
      <main id='blog' className='w-full h-screen md:h-screen sm:h-screen relative z-[1]'>

        <section className='flex justify-center items-center w-full mb-20'>
          <header className='w-8/12 grid place-content-center'>
            <h2 className='text-center font-bold text-3xl'>Contact Us</h2>
          </header>
        </section>

        <section className='w-full flex justify-center '>

          <article className='flex justify-center gap-8'>

            <figure className='w-full sm:pl-44 md:pl-80 lg:pl-[36rem] overflow-hidden absolute z-[-1]'>
              <Image className='h-[24rem] w-full' src='/contact/image1.png' width={720} height={720} alt='backgroud' /></figure>

            <form action="" className='border border-white backdrop-blur-sm bg-slate-50 bg-opacity-30 w-[22rem] p-4 rounded-3xl mt-12'>

              <label htmlFor="name" className='flex items-center gap-2 h-8 rounded-full px-3 border w-80 bg-white'>
                <figure className='text-gray-400'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                  </svg>

                </figure>
                <input className=' w-full h-full text-xs ml-1  border-none shadow-none outline-none' id='name' type="text" placeholder='Write your name' />
              </label>

              <label htmlFor="email" className='my-4 flex items-center gap-2 h-8 rounded-full px-3 border w-80  bg-white'>
                <figure className='text-gray-400'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </figure>
                <input className='w-full h-full text-xs ml-1  border-none shadow-none outline-none' id='email' type="email" placeholder='Write your email' />
              </label>

              <label htmlFor="message" className='flex items-start gap-2 h-32 rounded-xl px-3 border w-80  bg-white'>
                <figure className='mt-2 text-gray-400'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                  </svg>
                </figure>
                <textarea className='resize-none pt-1.5 w-full h-full text-xs ml-1 border-none shadow-none outline-none' id="message" placeholder='Write your message' />
              </label>

              <button type="submit" className='border w-full text-white text-[.7rem] rounded-full bg-gradient-to-r from-[#b983de] to-[#648ef3] h-6 mt-4'>Submit</button>
            </form>
            <div className='mt-16'>
              <figure>
                <Image src='/contact/image2.png' width={200} height={600} alt='contacts' />
              </figure>

            </div>
          </article>
        </section>
      </main>
    </>
  )
}