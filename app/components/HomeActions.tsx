'use client'

import { useAccount } from 'wagmi'

import { useHasMounted } from '@/app/hooks/useHasMounted'
export default function HomeActions() {
  function newGame(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('new game')
  }
  const { address, isConnecting, isReconnecting, isDisconnected, isConnected } =
    useAccount()
  const isMounted = useHasMounted()

  return (
    <div>
      {!isReconnecting || !isConnecting ? (
        <button
          className='capitalize font-bold flex justify-center items-center h-12 w-72 mb-2 bg-white text-black bg-opacity-60'
          onClick={newGame}
        >
          New Game
        </button>
      ) : (
        <div>Please Connect</div>
      )}
    </div>
  )
}
