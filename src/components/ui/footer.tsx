import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'

export const Footer = () => {
  return (
    <div className='p-5'>
        <div className="flex justify-between">
            <span className='text-sm'>©️ 2024 Lambda</span>
            <Link href="https://github.com/VaatuDev"><BsGithub/></Link>
        </div>
    </div>
  )
}
