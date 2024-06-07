import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <div className='flex'>
        <Image width={71} height={71} src="/lambda-icon.png" alt='LambdaIcon'/>
        <h1 className='my-auto font-bold text-[24px]'>Lambda Chatbot</h1>
    </div>
  )
}
