import React from 'react'
import HeaderOptions from './HeaderOptions'
export default function HeaderOption() {
  return (
    <div className='flex space-x-4 w-full justify-evenly'>
        {/* left section */}
        <div className='flex space-x-4'>
             <HeaderOptions  />
        </div>

        {/* right sections */}
        <div className='flex space-x-4'>
            <p className='link'>Settings</p>
            <p className='link'>Tools</p>

        </div>
    </div>
  )
}
