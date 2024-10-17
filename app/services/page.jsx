import React from 'react'
import Image from 'next/image'
import Navbar from "@/components/Navbar";

export default function Services() {
  return (
    <main id='services' className=' w-full h-screen overflow-hidden'>
      <Navbar/>
      <section className='flex justify-center w-full h-scren'>
        <article className='w-8/12 grid place-content-center'>
          <h2 className='text-center font-bold text-3xl mt-3'>Service</h2>
          <p className='text-center w-[37rem]'>We offer youth with chances for career development in their practice. We also support wide range of services to ensure client satisfaction</p>
        </article>
      </section>

      <article className=' flex justify-center bg-transparent mb-5 relative h-sreen'>
        <figure className='absolute left-[22rem] w-32'>
          <Image src='/services/illustration1.png' width='200' height='200' alt='circule' />
        </figure>

        <section className='flex bg-transparent mt-16 gap-3'>

          <div className='border border-white shadow-md bg-transparent p-5 flex-wap items-center w-52 rounded-3xl'>
            <figure className='flex justify-center items-center my-5'>
              <Image className='w-20 mb-8' src="/services/icon1.png" width="54" height="54" alt="icon message" />
            </figure>
            <div>
              <h4 className='text-sm font-bold'>Send Texts Instantly</h4>
              <p className='text-[.7rem] mt-3 mb-6'>Financial planning, forecasting and adjusting rapidly with customer demands and budgets.</p>
            </div>
            <span className='flex items-center font-semibold gap-3 text-sky-600 text-xs'>Learn More
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </figure>
            </span>
          </div>

          <div className='border border-white bg-white p-5 flex-wap shadow-md items-center w-52 rounded-3xl'>
            <figure className='flex justify-center items-center my-5'>
              <Image className='w-20 mb-8' src="/services/icon2.png" width="54" height="54" alt="icon message" />
            </figure>
            <div>
              <h4 className='text-sm font-bold'>Betetr Organized</h4>
              <p className='text-[.7rem] mt-3 mb-6'>Latest technology and experienced guidance, trained HR specialist to kepp updated.</p>
            </div>
            <span className='flex items-center font-semibold gap-3 text-sky-600 text-xs'>Learn More
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </figure>
            </span>
          </div>

          <div className='border border-white bg-transparent p-5 flex-wap shadow-md items-center w-52 rounded-3xl'>
            <figure className='flex justify-center items-center my-5'>
              <Image className='w-20 mb-8' src="/services/icon3.png" width="54" height="54" alt="icon message" />
            </figure>
            <div>
              <h4 className='text-sm font-bold'>Analytical Statistics</h4>
              <p className='text-xs mt-3 mb-6'>Messages, real-time reminders, memos, and many more will keep your team in sync.</p>
            </div>
            <span className='flex items-center font-semibold gap-3 text-sky-600 text-xs'>Learn More
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </figure>
            </span>
          </div>
        </section>
      </article>
    </main>
  )
}