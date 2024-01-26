'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
    UserButton,
} from "@clerk/nextjs";

const Header = () => {
    return (
        <>

            <nav className='flex flex-row justify-around'>
                <Link href={"/"}> <h1 className='text-4xl font-bold'>Small <span className='bg-gradient-to-r from-lime-500 from-10% via-sky-500 via-30% to-emerald-500 text-transparent bg-clip-text'>Link</span></h1> </Link>

                <div className='flex my-auto  gap-9'>
                    {/* <Link href={'/sign-in'}><button className='text-lg my-1'>Login</button></Link>
                    <Link href={'/sign-up'}><button className='text-lg bg-emerald-600 px-3 py-2 rounded-full text-yellow-200'>SignUp</button></Link> */}

                    {/* from clerk */}
                    <SignedIn>
                       <SignOutButton className="bg-emerald-600 px-4 py-2 text-lg rounded-full text-white hover:bg-emerald-400"/>
                       <UserButton />
                    </SignedIn>
                    <SignedOut afterSignOutUrl="/">
                        <SignInButton className="bg-emerald-600 px-4 py-2 text-lg rounded-full text-white hover:bg-emerald-400"/>
                    </SignedOut>
                
                </div>
            </nav>

            <div className='grid px-12 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 '>
                <div className=''>
                    <h1 className='text-[3rem] font-extrabold sm:text-[5em] md:text-[4em] lg:text-[4em] xl:text-[5em]'>Free to use <span className='bg-gradient-to-r from-lime-500 from-10% via-sky-500 via-30% to-emerald-500 text-transparent bg-clip-text'>Link</span> Shortner</h1>
                   
                <SignedOut>
                   <Link href={'/sign-up'}><button className='text-lg bg-emerald-600 px-4 py-2 rounded-full text-white hover:bg-emerald-400'>Try it out</button></Link> 
                </SignedOut>   
                
                
                </div>

                <Image className='' src="/hero1.png" height={200} width={700} />
            </div>

        </>
    )
}

export default Header