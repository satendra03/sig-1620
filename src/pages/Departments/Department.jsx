import { Context } from '@/context/Context';
import { Hospital } from 'lucide-react';
import React, { useContext } from 'react'

function Department({ department }) {
    const { setDepartmentId, setTimeSlots, setDepartmentName, departmentName } = useContext(Context);
    const handleClick = () => {
        setDepartmentId(department._id);
        setTimeSlots(department.timeSlots);
        setDepartmentName(department.departmentName);
    }
    return (
        <>
            <div onClick={handleClick} className={`department h-52 w-44 rounded-lg hover:cursor-pointer hover:scale-105 transition-all border hover:border-black hover:shadow-2xl active:scale-95 flex flex-col  justify-center ${departmentName === department.departmentName ? "border-black" : "border-black/30"} p-1`}>
                <div className="text w-full h-full flex flex-col items-center justify-center">
                    <h2 className='flex text-lg items-center justify-center h-[10%]'>
                        {department.departmentName}
                    </h2>
                    <p className="text-[0.8rem] line-clamp-3 text-muted-foreground text-center">{department.description}</p>
                </div>
            </div>
        </>
    )
}

export default Department