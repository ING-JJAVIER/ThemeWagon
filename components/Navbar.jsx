import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='Navbar flex h-14 w-full '>

            <ul className='w-full text-[.65rem] '>
                
                <div id='menu' className='flex items-center w-full justify-start  px-10 py-3'>

                    <div className='flex items-center justify-center'>
                        <Image src="/icon.png" width='54' height='54' alt='logo'/>
                        <span id='klean' className='font-semibold text-[1rem]'>Klean</span>
                    </div>

                    <div className='flex gap-3 ml-5 '>
                        <Link href='/'><li className='hover:text-sky-500'>Home</li></Link>
                        <Link href='/services'><li className='hover:text-sky-500'>Services</li></Link>
                        <Link href='/details'><li className='hover:text-sky-500'>Details</li></Link>
                        <Link href='/features'><li className='hover:text-sky-500'>Features</li></Link>
                        <Link href='/projects'> <li className='hover:text-sky-500'>Projects</li></Link>
                        <Link href='team'> <li className='hover:text-sky-500'>Team</li></Link>
                        <Link href='testimonial'><li className='hover:text-sky-500'>Testimonial</li></Link>
                        <Link href='blog'> <li className='hover:text-sky-500'>Blog</li></Link>
                        <Link href='contact'> <li className='hover:text-sky-500'>Contact</li></Link>
                    </div>

                    <div className='flex flex-grow items-center justify-end'>
                        <Link href='login'><li className='text-sky-600 hover:text-orange-500 font-semibold w-14'>Log in</li></Link>
                        <Link href='signup'><li><button id='submit' type='button' className='boder shadow-md bg-slate-300 h-8 font-semibold text-[bg-gradient-to-r from-purple-600 to-blue-700] active:text-[.3rem] w-20 flex justify-center items-center rounded-lg'>Sign Up</button></li></Link>
                    </div>

                </div>
            </ul>
        </nav>
    )
}
