import Header from './Header'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=''>
      <Header />
      {children}
    </div>
  )
}
