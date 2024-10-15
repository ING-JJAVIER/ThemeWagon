import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='flex justify-center h-14 w-full bg-gradient-to-r from-transparent via-white'>
            <ul className='w-full'>
                <div className='flex items-center justify-center gap-40 w-full'>
                    <div className='flex gap-8'>
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
                    <div className='flex justify-center items-center gap-8'>
                        <Link href='login'><li>Log In</li></Link>
                        <Link href='signup'><li><button type='button'>Sign Up</button></li></Link>
                    </div>

                </div>


            </ul>
        </nav>
    )
}
