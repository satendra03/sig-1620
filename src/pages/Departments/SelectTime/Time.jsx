import { Context } from '@/context/Context'
import React, { useContext, useState } from 'react'

function Time({ time }) {
  const { timeSlot, setTimeSlot } = useContext(Context);
  const timeslot = `${time.startTime} - ${time.endTime}`
  const handelClick = () => {
    setTimeSlot(timeslot);
  }
  return (
    <>
      <div className="container">
        <div onClick={handelClick} className={`container h-36 w-64 rounded-lg hover:cursor-pointer hover:scale-105 transition-all border hover:border-black hover:shadow-2xl active:scale-95 flex flex-col items-center justify-center ${timeSlot == timeslot ? "border-black" : "border-black/30"} `}>
          <h1>{timeslot}</h1>
        </div>
      </div>
    </>
  )
}

export default Time