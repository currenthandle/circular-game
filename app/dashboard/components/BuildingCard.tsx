'use client'
import { useState } from 'react'
import BuildingCardBack from './BuildingCardBack'
import { BuildingCardFront } from './BuildingCardFront'

export interface Cost {
  energy: number
  water: number
  minerals: number
  synthetics: number
  solar?: number
  turbine?: number
  biofertilizers?: number
  pesticides?: number
  [key: string]: number | undefined
}

export interface Building {
  title: string
  color: string
  img: string
  description: string
  circularity: number
  development: number
  cost: Cost
  lifetime: number
}

export default function BuildingCard(building: Building) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className='h-[130px] pb-8'
      onMouseEnter={(e) => setIsFlipped(true)}
      onMouseLeave={(e) => setIsFlipped(false)}
    >
      {isFlipped ? (
        <BuildingCardBack
          description={building.description}
          circularity={building.circularity}
          development={building.development}
          cost={building.cost}
          lifetime={building.lifetime}
        />
      ) : (
        <BuildingCardFront img={building.img} title={building.title} />
      )}
    </div>
  )
}
