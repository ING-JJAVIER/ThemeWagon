import React from 'react'
import Image from 'next/image'

export default function Testimonial() {
  return (
    <main id='team' className='w-full h-screen'>
      <section className='flex justify-center items-center w-full'>
        <article className='w-8/12 grid place-content-center'>
          <h2 className='text-center font-bold text-3xl'>What our clients have to say</h2>
          <div className='flex justify-center'>
            <p className='text-center w-8/12 mt-3'>Our succes is determined on how satisfied our customers are with the service. These reviews say we have stuff to do.</p>
          </div>
        </article>
      </section>

<section className='w-full flex justify-center items-center'>
    <article className='w-full flex justify-center items-center'>
        <div className='w-1/2'>
        <figure className='flex justify-center items-center w-40'>
              <Image src='/testimonial/image1.png' width='200' height='300' alt='photo of John Adams' />
            </figure>
        </div>
        <div className='w-1/2'>
    <h2>Outstanding!!</h2>
    <p>I just wanted to drop you a little email to say thank you for all your hard work. I'm delighted I chose you as my partner. You websites are quite simple to edit and maintain, which is fantastic.</p>
        </div>
    </article>
</section>

      </main>
  )
}
