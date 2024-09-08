import React from 'react'
import { ImSpinner8 } from "react-icons/im";
function Loading() {
  return (
    <>
        <div className="loading w-screen h-screen flex items-center justify-center">
            <div className="spinner h-[20vw] w-[20vw] flex items-center justify-center">
            <ImSpinner8 className="animate-spin opacity-40" size={100}/>
            </div>
        </div>
    </>
  )
}

export default Loading