// export default function Dashboard() {
//   return <div className='h-full border-2 border-box border-red-500'></div>
// }

import Image from 'next/image'
import Button from '../components/Button'
import BuildingCard from './components/BuildingCard'

export default function Dashboard() {
  return (
    <div className='grid grid-cols-12 h-full gap-10 py-8 px-12'>
      {/* MENU + Preview */}
      <div className='flex flex-col justify-between  h-full border-2 border-box border-red-500 col-span-3'>
        <Menu />
        <Actions />
      </div>
      {/* RESOURCES + BUILDING & INDUSTEIS */}
      <div className='h-full border-2 border-box border-red-500 col-span-5 flex flex-col justify-between space-y-4'>
        <Resources />
        <Buildings />
      </div>
      {/* SCORES */}
      <div className='h-full border-2 border-box border-red-500 col-span-4 flex flex-col justify-between'>
        <div className='aspect-square w-full relative border-2 border-box border-green-400'>
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
    <div className='bg-slate-300  bg-opacity-30 text-white font-bold p-4 border-blue-500 border-2 border-box h-[250px]  '>
      <h2>My Buildings</h2>
      <div className='grid grid-cols-4 h-full w-full border-green-500 border-2 border-box  justify-center'>
        {Array(4)
          .fill(0)
          .map((_, i) => (
<<<<<<< HEAD
            <BuildingCard key={i} />
=======
            <div className='w-4/6 p-2 bg-[#0D101B] border-2 border-red-400' key={i}>
              <div className='aspect-square relative'>
                <Image
                  src='/water.png'
                  alt='card'
                  fill
                  className='object-contain '
                />
              </div>
              <div className='flex justify-center '>
                <h3>Water</h3>
              </div>
            </div>
>>>>>>> 9e312ff (fix)
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
    <div className='w-8/12 p-2 bg-[#0D101B] border-2 border-box border-red-400'>
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
    <div className=' p-4 flex flex-col text-white font-bold bg-slate-300 bg-opacity-30'>
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
