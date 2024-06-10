import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export const Header = () => {
  return (
    <div className='flex animate__animated animate__fadeInDown'>
      <Link className='mx-auto' href="/">
        <Image width={90} height={90} src="/lambda-icon.png" alt='LambdaIcon'/>
      </Link>
    </div>
  )
}
