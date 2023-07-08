'use client'
import Image from 'next/image'
import Test from '@/app/components/test'
import { Web3Button } from '@web3modal/react'

export default function Home() {
  return (
    <main className=''>
      <Web3Button />
    </main>
  )
}
