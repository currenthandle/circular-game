// export default function Dashboard() {
//   return <div className='h-full border-2 border-red-500'></div>
// }

export default function Dashboard() {
  return (
    <div className='grid grid-cols-12 h-full gap-10 py-8 px-12'>
      {/* MENU + Preview */}
      <div className='flex flex-col  h-full border-2 border-red-500 col-span-3'>
        <Menu />
      </div>
      {/* RESOURCES + BUILDING & INDUSTEIS */}
      <div className='h-full border-2 border-red-500 col-span-5'></div>
      {/* SCORES */}
      <div className='h-full border-2 border-red-500 col-span-4'></div>
    </div>
  )
}

function Menu() {
  return (
    <div className='h-96 p-4 flex flex-col text-white font-bold bg-slate-300 bg-opacity-30'>
      <h3>Menu</h3>
      <div className='p-2 h-full flex flex-col justify-between'>
        <div>
          <div>My past actions</div>
          <div>Resource Marketplace</div>
        </div>

        <div>
          <div>Circularity point info</div>
          <div>Development points info</div>
          <div>Building info</div>
        </div>

        <div>Help</div>
      </div>
    </div>
  )
}
