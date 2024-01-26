'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { LuClipboardCopy } from "react-icons/lu";
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Header from './Header';

const GetData = () => {

  const [url, seturl] = useState("");
  const [err, seterr] = useState(false);
  const [alias, setalias] = useState("");
  const [container, setcontainer] = useState("");
  const [copyButton, setcopyButton] = useState(false);

  const fetchData = async () => {


    const options = {
      method: 'POST',
      url: 'https://url-shortener23.p.rapidapi.com/shorten',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '77fda6d5b5msha6dec97b1da1a89p11fa38jsnac6b2ee6fccf',
        'X-RapidAPI-Host': 'url-shortener23.p.rapidapi.com'
      },
      data: {
        url: `${url}`,
        alias: `${alias}`
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setcontainer(response.data);
      window.scrollTo({ bottom: 0, left: 0, behavior: 'smooth' });

    } catch (error) {
      console.log(error.message)

      if (error.message == "Request failed with status code 400") {
        seterr(true);
        // alert("Try different alias")
        toast(
          "Try some different alias. \n It should be unique",
          {
            duration: 6000,
          }
        );
      }

    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(container.short_url);
      toast.success('Copied!')
      //   console.log('URL copied to clipboard');
    } catch (error) {
      console.error('Unable to copy to clipboard', error);
    }
  };


  return (
    <>


      {/* <SignedOut>
        <SignInButton />
        <p>This content is public. Only signed out users can see the SignInButton above this text.</p>
        <Header />

      </SignedOut> */}

      <SignedIn>
        {/* <SignOutButton afterSignOutUrl="/" /> */}
        {/* <p>This content is private. Only signed in users can see the SignOutButton above this text.</p> */}


        <div className='flex flex-wrap flex-row gap-5 w-3/4 mx-auto justify-center bg-gray-200 px-8 py-8 rounded mt-8'>
          <input value={url} onChange={(e) => seturl(e.target.value)} type="url" placeholder='url...' className='rounded text-xl px-8 py-2' />
          <input value={alias} onChange={(e) => setalias(e.target.value)} type="url" placeholder='alias' className='rounded text-lg px-4 py-2 border-2 border-red-400' />
          <button onClick={fetchData} className='text-lg bg-emerald-600 px-3 py-2 rounded text-yellow-200 hover:bg-emerald-400'>Make it short</button>
        </div>

        <div className='bg-emerald-600 flex gap-5 flex-wrap text-center justify-center mt-8 py-4'>

          <a target="_blank" href={container.short_url}>  <h1 className='text-yellow-100 text-2xl'>{container.short_url}</h1>  </a>

          <button onClick={copyToClipboard} className='text-emerald-600 text-2xl bg-white rounded-full my-auto p-2'><LuClipboardCopy /></button>


        </div>

      </SignedIn>

    </>
  )
}

export default GetData