import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

function Nopage() {
    return (
        <div className='h-screen w-screen flex items-center justify-center flex-col'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Error 404
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Page Not Found
            </p>
            <Link to={"/"}>
                <Button variant="ghost" >Go Back To Home</Button>
            </Link>
        </div>
    )
}

export default Nopage