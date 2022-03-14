import React from 'react'

function Main() {
  return (
    <main className='p-4 sm:p-10 bg-slate-100'>
        <div className='flex'>
            <div className='mr-6'>
                <h1 className='text-2xl font-semibold mb-2'>Covid 19 Dashboard</h1>
                <h1 className='text-gray-600 ml-0.5'>Outlines Global Covid Statistics</h1>
            </div>
        </div>
        <section className='grid md:grid-cols-2 xl:grid-cols-4 gap-6'>
            <div className='flex  flex-col items-center p-8 bg-white shadow rounded-lg'>
                <div className='text-xl font-bold'>Confirmed Cases </div>
                <div className='text-2xl font-bold'>123,456</div>
            </div>
            <div className='flex flex-col  items-center p-8 bg-white shadow rounded-lg'>
                <div className='text-xl font-bold'>Confirmed Deaths </div>
                <div className='text-2xl font-bold'>123,456</div>
            </div>
            <div className='flex flex-col items-center p-8 bg-white shadow rounded-lg'>
                <div className='text-xl font-bold'>Vaccinated Cases</div>
                <div className='text-2xl font-bold'>123,456</div>
            </div>
            <div className='flex  flex-col items-center p-8 bg-white shadow rounded-lg'>
                <div className='text-xl font-bold'>Vaccinated Cases</div>
                <div className='text-2xl font-bold'>123,456</div>
            </div>
        </section>
    </main>
  )
}

export default Main