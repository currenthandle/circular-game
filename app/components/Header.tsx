import { Web3Button } from '@web3modal/react'

export default function Header() {
  return (
    <div className='flex justify-end w-full p-4 h-16'>
      <Web3Button />
    </div>
  )
}
