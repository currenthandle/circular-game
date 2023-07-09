import { Cost } from './BuildingCard'

interface BuildingCardBackProps {
  color: string
  description: string
  circularity: number
  development: number
  cost: Cost
  lifetime: number
}

export default function BuildingCardBack({
  color,
  description,
  circularity,
  development,
  cost,
  lifetime,
}: BuildingCardBackProps) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`text-[8px] h-[162px] p-2   border-box border-red-400  m-2 flex flex-col space-y-2`}
    >
      <div>
        <p>{description}</p>
        <p>Circularity {circularity}</p>
        <p>Development {development}</p>
      </div>
      <div>
        <p>To build you need</p>
        {Object.entries(cost).map(([resource, amount]) => (
          <p key={resource}>
            {amount} {resource.charAt(0).toUpperCase() + resource.slice(1)}
          </p>
        ))}
      </div>
      <div>
        <p>It lasts {lifetime} years</p>
      </div>
    </div>
  )
}
