import React from 'react'
import { useRouter} from "next/router"
import { useRef } from 'react'
import Avater from '../components/avater'
import HeaderOption from './headerOption'
import Image from '../public/images.png'


export default function Header() {
    const router  = useRouter()
    const searchInputRef = useRef(null)

    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value;
        if(!term) return
        router.push(`/search?term=${term}`)

    }
  return (
    <div className='sticky top-0 bg-white'>
       <div className='flex w-full p-6 items-center'>
        <Image
      src={Image}
      height={40}
      width={120}
      alt="Google logo"
      className='cursor-pointer'
      onClick={() => router.push("/")}
      />
      {/* form */}
      <form className='flex flex-grow border-gray-100 rounded-full shadow-lg max-w-3xl px-6 py-3 ml-10 mr-5 border items-center'>
        <input ref={searchInputRef} type="text" className='flex-grow  sm:mr-3 w-full focus:outline-none' />
        <svg xmlns="http://www.w3.org/2000/svg" className='h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" onClick = {() => (searchInputRef.current.value = "")}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        {/* microphone */}
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-3 h-6 hidden sm:inline-flex text-blue-500 pl-4 border-gray-300">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
        <button hidden type="submit"
        onClick={search}
        >Search 
        </button>
      </form>

      <Avater className="ml-auto" url={'https://pbs.twimg.com/profile_images/1570099418413633543/brzRESBX_400x400.jpg'}/>
      </div>
      {/* header options here */}
      <div>
        <HeaderOption />
      </div>
    </div>
  )
}
