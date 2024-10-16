import React from 'react'
import Image from 'next/image'
import Features from './features/page'


export default function Home() {
  return (
    <>
      {/*  <div>
      <div id='home' className='flex justify-center items-center h-full w-full'>
        <article className='flex justify-end h-full'>
          <div className='w-11/12 text-end'>
            <h1 id='title' className='text-[2rem] font-semibold mr-2'>Bootstrap 5 theme</h1>
            <h2 className='text-2xl'>crafted by <strong>Theme Wagon</strong></h2>
            <div className='flex justify-end'>
              <p className='mt-2 w-[19rem] text-start ml- text-[.6rem] '>We've spent the last 7 years helping over 1 million people like yourself to create stunning websites with minimum effort</p>
            </div>
            <div className='flex justi'>
              <button id='btndemo' type='button' className='text border text-xs w-20 h-6 rounded-lg mt-8 text-white'>Click Demo</button>
            </div>
          </div>
        </article>
        <section className=' h-full w-9/12 flex justify-end'>
          <Image className='w-full h-full' src="/illustration1.png" width="1280" height="780" alt='image' />
        </section>
        
      </div>
      <footer className='w-full flex justify-center' >
        <div className='h-20 w-10/12 flex justify-between items-center mx-40'>
          <Image className='w-12 h-5' src="/google.png" width="500" height="300" alt='image' />
          <Image className='w-16 h-5' src="/netflix.png" width="500" height="300" alt='image' />
          <Image className='w-16 h-5' src="/microsoft.png" width="500" height="300" alt='image' />
          <Image className='w-20 h-5' src="/mailbuster.png" width="500" height="300" alt='image' />
          <Image className='w-12 h-5' src="/themewagon.png" width="500" height="300" alt='image' />
        </div>
      </footer>
      </div> */}
      <Features/>
    </>
  )
}