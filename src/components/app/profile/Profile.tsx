import Image from 'next/image'
import React from 'react'
import ImageProfile from "../../../../public/images/Navbar/Ehsanullah_Yaqoobi.jpg"

export default function Profile() {
  return (
    <div className='bg-lime-700 w-[25%]'>
        
      <span className=''>
        <Image src={ImageProfile} alt='' width={300} height={300} className='w-12 h-12 rounded-full' />
      </span>
    </div>
  )
}
