import React from 'react'
import Image from 'next/image'

export default function Avater({url, className}) {
  return (
    <Image 
    loading='lazy'
    src={url}  
    alt="Profile picture"
    height={20}
    width={20}
   
    className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}/>
  )
}
