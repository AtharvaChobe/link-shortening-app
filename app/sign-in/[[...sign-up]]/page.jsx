'use client'
import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='h-[100vh] w-full flex items-center justify-center'>
        <SignIn/>
    </div>
  )
}

export default page