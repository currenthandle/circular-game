// export default function Dashboard() {
//   return <div className='h-full border-2 border-red-500'></div>
// }

import Image from 'next/image'
import Button from '../components/Button'

export default function Dashboard() {
  return (
    <div className='grid grid-cols-12 h-full gap-10 py-8 px-12'>
      {/* MENU + Preview */}
      <div className='flex flex-col justify-between  h-full border-2 border-red-500 col-span-3'>
        <Menu />
        <Actions />
      </div>
      {/* RESOURCES + BUILDING & INDUSTEIS */}
      <div className='h-full border-2 border-red-500 col-span-5'>
        <Resources />
      </div>
      {/* SCORES */}
      <div className='h-full border-2 border-red-500 col-span-4'>
        <div className='w-full h-4/6 relative'>
          <Image
            src='/rotate-earth.gif'
            alt='Rotating Earth'
            fill
            className='object-contain'
          />
        </div>
      </div>
    </div>
  )
}

function Resources() {
  return (
    <div className='text-white font-bold bg-slate-300 bg-opacity-30 h-4/6 grid-cols-3'></div>
  )
}

function Card() {
  return <div className='h-1/3 w-1/3 border-2 border-red-500'></div>
}

function Menu() {
  return (
    <div className='h-3/6 p-4 flex flex-col text-white font-bold bg-slate-300 bg-opacity-30'>
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
    <div className='flex flex-col h-2/6 justify-between h-5/6 pt-4'>
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
