'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className='bg-slate-400 p-4'>
      <div className='container mx-auto flex justify-around items-center'>
        <Link href='/' className='text-white text-xl font-semibold'>
          Trace
        </Link>

        <ul className='flex space-x-6'>
          <li>
            <Link
              href='/'
              className='text-white  cursor-pointer hover:text-blue-600'>
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/issues'
              className='text-white cursor-pointer hover:text-blue-600'>
              Issues
            </Link>
          </li>
        </ul>
        <div>
          {/* <Image
            alt='dummy-image'
            src={{
              src: 'https://fastly.picsum.photos/id/436/200/300.jpg?hmac=OuJRsPTZRaNZhIyVFbzDkMYMyORVpV86q5M8igEfM3Y',
              height: 100,
              width: 100,
            }}
          /> */}
        </div>
      </div>
    </nav>
  )
}

export default Header
