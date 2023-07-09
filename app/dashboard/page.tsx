'use client'
// export default function Dashboard() {
//   return <div className='h-full  border-box border-red-500'></div>
// }

import Image from 'next/image'
import Button from '../components/Button'
import BuildingCard, { Building } from './components/BuildingCard'
import buildings from '@/public/buildings.json'

import { useAccount, useContractRead, useContractReads } from 'wagmi'
import circEconABI from '@/abi/CircularEconomy.sol/CircularEconomy.json'
import resourcesABI from '@/abi/Resources.sol/Resources.json'
import equipmentAbi from '@/abi/Equipment.sol/Equipment.json'
import buildingsABI from '@/abi/Buildings.sol/Buildings.json'
import { useState } from 'react'

const circEconAddr =
  '0x9d3530460e6a76d2ac584034f2e57781b5058dc5' as `0x${string}`
const resourceAddr =
  '0xfb17bf37879F1EA3bafb2E4a33Dcb3A4E0d8dfAF' as `0x${string}`
const equipmentAddr =
  '0xcf4E5c7301623E4445fc580a6d5c725D62118D4a' as `0x${string}`
const buildingAddr =
  '0x08537D2Fa64eF34c2989000803cF1c47c8768693' as `0x${string}`
const circEconContract = {
  address: circEconAddr,
  abi: circEconABI.abi,
}
const resourceContract = {
  address: resourceAddr,
  abi: resourcesABI.abi,
}
const equipmentContract = {
  address: equipmentAddr,
  abi: equipmentAbi.abi,
}
const buildingContract = {
  address: buildingAddr,
  abi: buildingsABI.abi,
}

export default function Dashboard() {
  const {
    address: userAddress,
    isConnecting,
    isReconnecting,
    isDisconnected,
    isConnected,
  } = useAccount()

  // const circEconAddr = process.env.CIRC_ECON_CONTRACT as `0x${string}`
  console.log('circEconAddr', circEconAddr)
  // const [gameAddr, setGameAddr] = useState<`0x${string}` | null>(null)

  const {
    data: gameAddr,
    isFetching,
    isSuccess,
    isError,
    isLoading,
  } = useContractRead({
    address: circEconAddr,
    abi: circEconABI.abi,
    functionName: 'playerToGame',
    args: [userAddress],
  })
  // setGameAddr(gAddr as `0x${string}`)

  console.log('gameAddr', gameAddr)

  const {
    data: resourcesBalance,
    isError: resourceErr,
    error,
  } = useContractRead({
    ...resourceContract,
    functionName: 'resources',
    // args: [gameAddr as `0x${string}`],
    args: [],
  })

  console.log('resourceErr', resourceErr)
  console.log('error', error)
  // console.log('isError', isError)
  // console.log('isFetching', isFetching)
  // console.log('isSuccess', isSuccess)

  console.log('gameAddr', gameAddr)
  console.log('resourcesBalance', resourcesBalance)

  // const {data: resourcesAddr } = useContractRead({

  // console.log('game contract', process.env.GAME_CONTRACT)
  return (
    <div className='grid grid-cols-12 h-full gap-10 py-8 px-12'>
      {/* MENU + Preview */}
      <div className='flex flex-col justify-between  h-full  border-box border-red-500 col-span-3'>
        <Menu />
        <Actions />
      </div>
      {/* RESOURCES + BUILDING & INDUSTEIS */}
      <div className='h-full  border-box border-red-500 col-span-5 flex flex-col justify-between space-y-4'>
        <Resources />
        <Buildings />
      </div>
      {/* SCORES */}
      <div className='h-full  border-box border-red-500 col-span-4 flex flex-col justify-between'>
        <div className='aspect-square w-full relative  border-box border-green-400'>
          <Image
            src='/rotate-earth.gif'
            alt='Rotating Earth'
            fill
            className='object-contain'
          />
        </div>
        <Scores />
      </div>
    </div>
  )
}

function Scores() {
  return (
    <div className='text-white font-bold flex flex-col justify-between h-56 p-4 bg-slate-300 bg-opacity-30'>
      <div className='flex justify-between'>
        <div>Main Score</div>
        <div>19283847</div>
      </div>
      <div className='flex justify-between'>
        <div>Circularity</div>
        <div>6565656</div>
      </div>
      <div className='flex justify-between'>
        <div>Development</div>
        <div>7767677</div>
      </div>
      <div className='flex justify-between'>
        <div>Population</div>
        <div>1000</div>
      </div>
    </div>
  )
}

function Buildings() {
  return (
    <div className='bg-slate-300  bg-opacity-30 text-white font-bold p-4 border-blue-500  border-box h-[250px]  '>
      <h2>My Buildings</h2>
      <div className='grid grid-cols-4 h-full w-full border-green-500  border-box  justify-center'>
        {buildings.map((building: Building) => (
          <BuildingCard key={building.title} {...building} />
        ))}
      </div>
    </div>
  )
}

function Resources() {
  return (
    <div className='bg-slate-300 h-[600px] bg-opacity-30 text-white font-bold p-4 flex flex-col'>
      <h2>My Planet</h2>
      <div className='mt-4 flex-grow grid grid-cols-3 auto-rows-min place-items-center gap-4 overflow-scroll'>
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <Cell key={i} />
          ))}
      </div>
    </div>
  )
}

function Cell() {
  return (
    <div className='w-full flex justify-center h-full max-h-full'>
      <Card />
    </div>
  )
}

function Card() {
  return (
    <div className='w-8/12 p-2 bg-[#0D101B]  border-box border-red-400'>
      <div className='aspect-square relative'>
        <Image src='/water.png' alt='card' fill className='object-contain' />
      </div>
      <div className='flex justify-center'>
        <h3>Water</h3>
      </div>
    </div>
  )
}

function Menu() {
  return (
    <div className='h-96 p-4 flex flex-col text-white font-bold bg-slate-300 bg-opacity-30'>
      <h3>Menu</h3>
      <div className='p-2 h-full flex flex-col justify-between'>
        <div>
          <div>My past actions</div>
          <div>Resource Marketplace</div>
        </div>

        <div>
          <div>Circularity point info</div>
          <div>Development points info</div>
          <div>Building info</div>
        </div>

        <div>Help</div>
      </div>
    </div>
  )
}

function Actions() {
  return (
    <div className='flex flex-col  justify-between  pt-4'>
      <Button type='secondary' width='w-full' height='h-16'>
        Preview
      </Button>
      <Button type='secondary' width='w-full' height='h-16'>
        Build
      </Button>
      <Button type='secondary' width='w-full' height='h-16' margin=''>
        Next Year
      </Button>
    </div>
  )
}
