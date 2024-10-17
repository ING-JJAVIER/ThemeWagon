import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <main className='w-full flex flex-wrap justify-center pt-5 bg-gradient-to-r from-orange-50 via-blue-100 to bg-pink-100'>

            <section className='flex justify-center w-full'>

                <ul className='flex justify-between w-9/12 border-none border-b-8 border-b-gray-400'>

                    <div>
                        <span className='text-xs font-bold'>About</span>
                        <li className='text-xs my-1 text-gray-400 cursor-pointer'>Price</li>
                        <li className='text-xs text-gray-400 cursor-pointer '>About</li>
                        <li className='text-xs my-1 text-gray-400 cursor-pointer'>Services</li>
                        <li className='text-xs text-gray-400 cursor-pointer '>Career</li>
                    </div>

                    <div>
                        <span className='text-xs font-bold'>Resources</span>
                        <li className='text-xs my-1 text-gray-400 cursor-pointer'>Terms</li>
                        <li className='text-xs my-1 text-gray-400 cursor-pointer'>Help</li>
                        <li className='text-xs my-1 text-gray-400 cursor-pointer'>Privacy</li>
                    </div>

                    <div>
                        <span className='text-xs font-bold'>Team</span>
                        <li className='text-xs my-1 text-gray-400 cursor-pointer'>Developer</li>
                        <li className='text-xs my-1 text-gray-400 cursor-pointer'>Designer</li>
                    </div>

                    <div>
                        <span className='text-xs font-bold'>Blog</span>
                        <li className='text-xs my-1 text-gray-400 cursor-pointer'>CEO</li>
                        <li className='text-xs my-1 text-gray-400 cursor-pointer'>Lifestyle</li>
                        <li className='text-xs my-1 text-gray-400 cursor-pointer'>Article</li>
                        <li className='text-xs my-1 text-gray-400 cursor-pointer'>Tech</li>
                    </div>

                    <div className='ml-20'>
                        <span className='text-xs font-bold'>Follow Us</span>
                        <div className='flex justify-between items-center h-5 gap-2 my-2 w-28'>
                            <button type='button' className='h-full'>
                                <Image className='h-full' src="/footer/icon1.svg" width={100} height={100} alt="facebook icon" />
                            </button>

                            <button type='button' className='h-full'>
                                <Image className='h-full' src="/footer/icon2.svg" width={100} height={100} alt="twitter icon" />
                            </button>
                            <button type='button' className='h-full'>
                                <Image className='h-full' src="/footer/icon3.svg" width={100} height={100} alt="inkedin icon" />
                            </button>

                            <button type='button' className='h-full'>
                                <Image className='h-full' src="/footer/icon4.svg" width={100} height={100} alt="facebook icon" />
                            </button>
                        </div>
                        <span className='text-xs font-bold'>Subscribe to our newsletter</span>

                        <label htmlFor="news" className='my-4 flex items-center gap-2 h-6 rounded-full px-3 border w-56  bg-white'>
                            <figure className='text-gray-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
                            </figure>
                            <input className='w-full flex-grow h-full text-xs ml-1  border-none shadow-none outline-none' id='news' type="email" placeholder='Email' />
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-violet-400">
                                    <circle cx="12" cy="12" r="11" stroke="blueviolet-" strokeWidth="1.5" fill="none" />
                                    <path transform="scale(0.75) translate(6, 6)" strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>


                            </figure>
                        </label>
                    </div>

                </ul>

            </section >

            <div className='border border-b-transparent border-l-transparent border-r-transparent border-t-gray-300 w-9/12 flex justify-between py-3'>
                <h3 className='text-xs'>All right Reserved &copy; <strong>Your Company, 2021</strong></h3>
                <h3 className='text-xs'>Made with &#x2764; by <strong>Themewagon</strong></h3>
            </div>
            
        </main>
    )
}
