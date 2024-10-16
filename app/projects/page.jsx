import React from 'react'
import Image from 'next/image'

export default function Projects() {
  return (
    <main id='projects' className='w-full h-full pb-24'>
      <section className='flex justify-center items-center w-full'>
        <article className='w-8/12 grid place-content-center'>
          <h2 className='text-center font-bold text-3xl'>Our Projects</h2>
          <div className='flex justify-center'>
            <p className='text-center w-8/12 mt-3'>A project is a single or team activity, combining research and design with best effort. Here are some of our team's projects.</p>
          </div>
        </article>
      </section>

      <section className='w-full flex justify-center items-center mt-10'>
        <article>
          <div className='flex border border-white shadow-md rounded-lg'>
            <div>
              <figure className='flex justify-center m-2 '>
                <Image className='w-60 h-48  ' src='/projects/image1.png' width='300' height='300' alt='phone image' />
              </figure>

              <figure className='flex justify-center m-2'>
                <Image className='w-60 h-80' src='/projects/image2.png' width='300' height='300' alt='phone image' />
              </figure>
            </div>

            <div>
              <figure className='flex justify-center  my-2'>
                <Image className='w-60 h-80' src='/projects/image3.png' width='300' height='300' alt='phone image' />
              </figure>
              <figure className='flex justify-center my-2 h-48'>
                <Image className='w-60 h-48' src='/projects/image4.png' width='300' height='300' alt='phone image' />
              </figure>
            </div>

            <div>
              <figure className='flex justify-center m-2'>
                <Image className='w-60 h-48' src='/projects/image5.png' width='300' height='300' alt='phone image' />
              </figure>
              <figure className='flex justify-center m-2'>
                <Image className='w-60 h-80' src='/projects/image6.png' width='300' height='300' alt='phone image' />
              </figure>
            </div>







          </div>
        </article>
      </section>




    </main>
  )
}