type Props = {
  text: string
  type?: string
}

export default function Button({ text, type = 'main' }: Props) {
  let styles = 'bg-white text-black'
  if (type === 'secondary') {
    styles = 'bg-blue-400 text-white bg-slate-400'
  }
  return (
    <div
      className={`capitalize font-bold mb-2 flex justify-center items-center bg-opacity-60 w-72 h-12 ${styles} `}
    >
      {text}
    </div>
  )
}
