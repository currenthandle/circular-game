'use client'
import { useState } from 'react'
import BuildingCardBack from './BuildingCardBack'
import { BuildingCardFront } from './BuildingCardFront'

export default function BuildingCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      onMouseEnter={(e) => setIsFlipped(true)}
      onMouseLeave={(e) => setIsFlipped(false)}
    >
      {isFlipped ? <BuildingCardBack /> : <BuildingCardFront />}
    </div>
  )
}
