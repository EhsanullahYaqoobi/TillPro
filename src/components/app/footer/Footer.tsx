import React from 'react'
import { FloatingDock } from './FloatingDock'
import { FloatingDockData } from '@/components/lib/type'

export default function Footer() {
  return (
    <div className='bg-Footer-color flex items-center w-full h-[200px] mt-2'>
      <FloatingDock items={FloatingDockData} />
    </div>
  )
}
