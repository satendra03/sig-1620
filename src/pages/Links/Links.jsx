import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

function Links() {
  return (
    <>
      <div className='flex gap-10 px-20 flex-col h-screen w-screen  items-center justify-center'>
        <div className='heading w-[100%] flex items-center justify-center bg-gray-400'>
          <h1 className='text-3xl font-semibold font-[Helvetica]'>Satendra | Home</h1>
        </div>
        <div className="buttons gap-2 grid grid-cols-4 grid-rows-4">
          <Link to={'/sattu'}><Button className="w-full">Random</Button></Link>
          <Link to={'/departments'}><Button className="w-full">Departments</Button></Link>       
          <Link to={'/chart'}><Button className="w-full">Chart</Button></Link>  
          <Link to={'/login'}><Button className="w-full">Login</Button></Link>       
          <Link to={'/home'}><Button className="w-full">Home</Button></Link>       
          <Link to={'/loading'}><Button className="w-full">Loading</Button></Link>       
          <Link to={'/admin'}><Button className="w-full">Admin</Button></Link>       
          <Link to={'/beds'}><Button className="w-full">Beds</Button></Link>
        </div>
      </div>
    </>
  )
}

export default Links