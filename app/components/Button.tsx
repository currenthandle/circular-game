type Props = {
  text: string
  type?: string
}

export default function Button({ text }: Props) {
  return <div>{text}</div>
}
