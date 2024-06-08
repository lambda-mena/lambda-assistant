import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export const Header = () => {
  return (
    <div className='flex'>
        <Image width={71} height={71} src="/lambda-icon.png" alt='LambdaIcon'/>
        <Link href="/" className='my-auto font-bold text-[24px]'>Lambda Assistant</Link>
    </div>
  )
}
