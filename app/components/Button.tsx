type Props = {
  children: string
  type?: string
  height?: string
  width?: string
  margin?: string
}

export default function Button({
  children,
  type = 'main',
  height = 'h-12',
  width = 'w-72',
  margin = 'mb-2',
}: Props) {
  let styles = 'bg-white text-black bg-opacity-60'
  if (type === 'secondary') {
    styles = 'bg-blue-400 text-white bg-slate-300 bg-opacity-30'
  }
  return (
    <div
      className={`capitalize font-bold flex justify-center items-center ${height} ${width} ${margin} ${styles} `}
    >
      {children}
    </div>
  )
}
