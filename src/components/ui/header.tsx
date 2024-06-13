import { TbLambda } from "react-icons/tb";
import Link from 'next/link';
import React from 'react'

export const Header = () => {
  return (
    <div className='flex animate__animated animate__fadeInDown'>
      <Link className='mx-auto' href="/">
        <TbLambda className="my-5" size={40} />
      </Link>
    </div>
  )
}
