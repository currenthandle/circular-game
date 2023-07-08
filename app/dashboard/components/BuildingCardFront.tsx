import Image from 'next/image'

interface BuildingCardFrontProps {
  img: string
  title: string
}

export function BuildingCardFront({ img, title }: BuildingCardFrontProps) {
  return (
    <div className='h-[162px] p-2 bg-[#0D101B] border-2 border-box border-red-400  m-2'>
      <div className='aspect-square relative '>
        <Image src='/water.png' alt='card' fill className='object-contain ' />
      </div>
      <div className='flex justify-center '>
        <h3 className='text-xs'>{title}</h3>
      </div>
    </div>
  )
}
