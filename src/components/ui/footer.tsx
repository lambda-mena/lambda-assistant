import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'

export const Footer = () => {
  return (
    <div className='p-5'>
        <div className="flex justify-between">
            <Link href="/" className='text-sm'>©️ 2024 Lambda</Link>
            <Link href="https://github.com/VaatuDev/lambda-assistant"><BsGithub/></Link>
        </div>
    </div>
  )
}
