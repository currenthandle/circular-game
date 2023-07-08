'use client'
import Image from 'next/image'
import Test from '@/app/components/test'
import { Web3Button } from '@web3modal/react'
import Button from '@/app/components/Button'

export default function Home() {
  return (
    <main className=''>
      {/* HEADER */}
      <div className='flex justify-end w-full p-2'>
        <Web3Button />
      </div>
      {/* BODY */}
      <div>
        <Button text='New Game' />
        <Button text='Scores' />
      </div>
    </main>
  )
}
