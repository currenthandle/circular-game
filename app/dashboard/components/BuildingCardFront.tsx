import Image from 'next/image'

interface BuildingCardFrontProps {
  img: string
  title: string
  color: string
}

export function BuildingCardFront({
  img,
  title,
  color,
}: BuildingCardFrontProps) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`h-[162px] p-2  border-box border-red-400  m-2`}
    >
      <div className='aspect-square relative '>
        <Image src={img} alt='card' fill className='object-contain ' />
      </div>
      <div className='flex justify-center '>
        <h3 className='text-xs'>{title}</h3>
      </div>
    </div>
  )
}
