import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='p-5'>
        <div className="flex justify-between">
            <Link href="/" className='text-sm'>©️ 2024 Lambda</Link>
            <Link href="https://github.com/VaatuDev/lambda-assistant">
              <FaGithub size={20}/>
            </Link>
        </div>
    </div>
  )
}
