import Header from './Header'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-full flex flex-col'>
      <Header />
      {children}
    </div>
  )
}
