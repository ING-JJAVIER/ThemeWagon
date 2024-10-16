import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='flex h-14 w-full bg-gradient-to-r from-transparent via-white to-transparent'>

            <ul className='w-full text-[.65rem]'>
                <div id='menu' className='flex items-center w-full justify-start  px-10 py-3'>
                    <div className='flex items-center justify-center'>
                        <Image src="/icon.png" width='54' height='54' alt='logo'/>
                        <span id='klean' className='font-semibold text-[1rem]'>Klean</span>
                    </div>
                    <div className='flex gap-3 ml-5'>
                        <Link href='/'><li>Home</li></Link>
                        <Link href='/services'><li>Services</li></Link>
                        <Link href='/details'><li>Details</li></Link>
                        <Link href='/features'><li>Features</li></Link>
                        <Link href='/projects'> <li>Projects</li></Link>
                        <Link href='team'> <li>Team</li></Link>
                        <Link href='testimonial'><li>Testimonial</li></Link>
                        <Link href='blog'> <li>Blog</li></Link>
                        <Link href='contact'> <li>Contact</li></Link>
                    </div>
                    <div className='flex flex-grow items-center justify-end'>
                        <Link href='login'><li className='text-sky-600 font-semibold w-14'>Log in</li></Link>
                        <Link href='signup'><li><button id='submit' type='button' className='boder shadow-md bg-slate-300 h-8 font-semibold text-[bg-gradient-to-r from-purple-600 to-blue-700] w-20 flex justify-center items-center rounded-lg'>Sign Up</button></li></Link>
                    </div>

                </div>
            </ul>
        </nav>
    )
}
