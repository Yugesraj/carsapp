
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Header = () => {
  return (
    <header className='w-full z-10'>
        <nav className='w-full flex justify-between items-center'>
            <Link href="/" className='px-8 py-8'>
            <Image  src="/logo.svg" alt='carlogo' width={150} height={90}
              />
            </Link>

            <CustomButton title='Sign Up' containerStyles='bg-blue-200 h-[30px] rounded-full p-5 mr-20 z-10' />
        </nav>
    </header>
  )
}

export default Header