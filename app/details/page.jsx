import React from 'react'
import Image from 'next/image'

export default function Details() {
  return (
    <main id='details' className='w-full h-full'>

      <section className='flex justify-between items-center w-full mb-24'>
        <figure className='w-1/2 p-10 flex justify-center '>
          <Image src='/details/illustration3.png' width='1080' height='720' alt='image' />
        </figure>

        <article className='w-1/2 flex justify-center'>
          <div className='w-1/2'>
            <h2 className='font-bold text-3xl mb-6'>A creative team which builds stunning UI/UX</h2>
            <p className='text-[.80rem] mb-6'>Today, I`&apos;`d lije to show you some incredible Sign Up screen app UI ideas and concepts that offer a modern user experience. The most stunning, cutting-edge UI/UX.</p>
            <p className='text-[.80rem]'>Klean is a free Bootstrap 5 templates for multipurpose landing pages. This design is a perfect choice, carefully curated by <strong>ThemeWagon</strong></p>
            <button id='read' type='button' className='font-semibold text-sm border w-24 h-8 rounded-lg mt-8'>Read More</button>
          </div>
        </article>
      </section>

      <section className='flex justify-between items-center w-full '>
        <article className='w-1/2 flex justify-center'>
          <div className='w-1/2 '>
            <h2 className='font-bold text-3xl mb-6'>Devoted to defining the cutting edge</h2>
            <p className='text-[.75rem] mb-6'>`&quot;`This new creation is cutting-edge technology`&quot;` says the researcher, `&quot;`whose study originates from a business at the forefront of space science`&quot;`</p>
            <p className='text-[.70rem]'>Klean is a free Bootstrap 5 templates for multipurpose landing pages. This design is a perfect choice, carefully curated by <strong>ThemeWagon</strong></p>
            <button id='read' type='button' className='font-semibold text-sm border w-24 h-8 rounded-lg mt-8'>Read More</button>
          </div>
        </article>
        <figure className="w-1/2 p-10 flex justify-center">
          <Image src="/details/illustration6.png "width="1080" height='720' alt="image" />
        </figure>
      </section>
    </main>
  )
}