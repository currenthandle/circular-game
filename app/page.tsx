'use client'
import Image from 'next/image'
import Test from '@/app/components/test'
import { Web3Button } from '@web3modal/react'
import Button from '@/app/components/Button'
import Header from './components/Header'

export default function Home() {
  return (
    <main className='h-full -mt-24 flex flex-col items-center justify-center'>
      <Button text='New Game' />
      <Button type='secondary' text='Scores' />
    </main>
  )
}
