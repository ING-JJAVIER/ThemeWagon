import React from 'react'
import Image from 'next/image'

export default function Features() {
  return (
    <main id='features' className='w-full h-screen'>
      <section className='flex justify-center items-center w-full pt-20'>
        <article className='w-8/12 grid place-content-center'>
          <h2 className='text-center font-bold text-3xl'>Features</h2>
          <div className='flex justify-center'>
            <p className='text-center w-8/12 mt-3'>We provide a number of excellent features that will undoubtedly improve the user experience. We also provide a better support system.</p>
          </div>
        </article>
      </section>

      <section className='w-full flex justify-center items-center mt-10'>
        <article className='w-8/12 flex flex-wrap justify-between gap-6 gap-y-10'>
          <div className='flex-wrap justify-center items-center text-center w-52'>
            <figure className='flex justify-center mb-5'>
              <Image src='/features/icon1.png' width='100' height='100' alt='email icon' />
            </figure>
            <h4 className='font-bold'>Encrypted Mail</h4>
            <span className='w-full text-xs'>A process of encrypting email communications</span>
          </div>

          <div className='flex-wrap justify-center items-center text-center w-52'>
            <figure className='flex justify-center mb-5'>
              <Image src='/features/icon2.png' width='100' height='100' alt='email icon' />
            </figure>
            <h4 className='font-bold'>Display Sharing</h4>
            <span className='w-full text-xs'>With other participants, you may share your screen.</span>
          </div>

          <div className='flex-wrap justify-center items-center text-center w-52'>
            <figure className='flex justify-center mb-5'>
              <Image src='/features/icon3.png' width='100' height='100' alt='email icon' />
            </figure>
            <h4 className='font-bold'>Private Notebook</h4>
            <span className='w-full text-xs'>Private Notebook is an application that is protected.</span>
          </div>

          <div className='flex-wrap justify-center items-center text-center w-48'>
            <figure className='flex justify-center mb-5'>
              <Image src='/features/icon4.png' width='100' height='100' alt='email icon' />
            </figure>
            <h4 className='font-bold'>App App Assistance</h4>
            <span className='w-full text-[.65rem]'>App Assistance is quickly and effectively ran the system.</span>
          </div>

          <div className='flex-wrap justify-center items-center text-center w-48'>
            <figure className='flex justify-center mb-5'>
              <Image src='/features/icon5.png' width='100' height='100' alt='email icon' />
            </figure>
            <h4 className='font-bold'>Multiple Printing</h4>
            <span className='w-full text-xs'>Our canvas prints are crafted on top-notch canvas.</span>
          </div>

          <div className='flex-wrap justify-center items-center text-center w-48'>
            <figure className='flex justify-center mb-5'>
              <Image src='/features/icon6.png' width='100' height='100' alt='email icon' />
            </figure>
            <h4 className='font-bold'>Free Sketch</h4>
            <span className='w-full text-xs'>Our canvas prints are crafted on top-notch canvas.</span>
          </div>

        </article>


      </section>





    </main>
  )
}