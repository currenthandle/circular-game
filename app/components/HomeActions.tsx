'use client'

import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'

import { useHasMounted } from '@/app/hooks/useHasMounted'

import circularEconomy from '@/abi/CircularEconomy.sol/CircularEconomy.json'
// import { Router } from 'next/router'
import { useRouter } from 'next/navigation'
export default function HomeActions() {
  const router = useRouter()
  const { address, isConnecting, isReconnecting, isDisconnected, isConnected } =
    useAccount()
  const isMounted = useHasMounted()

  console.log('isMounted', isMounted)

  const { config, error } = usePrepareContractWrite({
    address: '0x9d3530460e6a76d2ac584034f2e57781b5058dc5',
    abi: circularEconomy.abi,
    functionName: 'newGame',
  })

  // console.log('error', error)
  const { data, isLoading, isSuccess, write } = useContractWrite(config)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isSuccess) {
    // redirect to dashboard
    router.push('/dashboard')
    // return <div>Transaction: {JSON.stringify(data)}</div>
  }

  // console.log('data', data)
  // console.log('write', write)

  return (
    <div>
      {!isReconnecting || !isConnecting ? (
        <button
          className='capitalize font-bold flex justify-center items-center h-12 w-72 mb-2 bg-white text-black bg-opacity-60'
          // disabled={!write}
          onClick={() => write?.()}
        >
          New Game
        </button>
      ) : (
        <div>Please Connect</div>
      )}
    </div>
  )
}
