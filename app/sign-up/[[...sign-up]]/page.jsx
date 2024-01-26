'use client'
import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const page = () => {
  return (
    <div className='h-[100vh] w-full flex items-center justify-center'>
      <SignUp/>
    </div>
  )
}

export default page