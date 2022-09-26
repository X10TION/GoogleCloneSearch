import React from 'react'
import {useRouter} from  'next/router'
import {ChevonLeftIcon, ChevonRightIcon} from "@heroicons/react/solid"
import Link from 'next/dist/client/link'

export default function PaginationButton() {
    const router = useRouter()
    const startIndex = Number(router.query.start) || 0;
  return (
    <div className='flex max-w-lg justify-between text-blue-700 mb-10'>
        {startIndex >= 10 && (
            <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
            <div className='flex flex-grow flex-col items-center hover:underline'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                <p>Previous</p>
            </div>
            </Link>
        ) }
        <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div  className='flex flex-grow flex-col items-center hover:underline'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            <p>Next</p>
            </div>
          </Link>
    </div>
  )
}
