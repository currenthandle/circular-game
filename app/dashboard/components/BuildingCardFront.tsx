import Image from 'next/image'

export function BuildingCardFront() {
  return (
    <div className=' p-2 bg-[#0D101B] border-2 border-box border-red-400  m-2'>
      <div className='aspect-square relative '>
        <Image src='/water.png' alt='card' fill className='object-contain ' />
      </div>
      <div className='flex justify-center '>
        <h3>Water</h3>
      </div>
    </div>
  )
}
