import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation, useParams } from "react-router-dom";
import Time from './Time';
import { Context } from '@/context/Context';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import Queue from '@/pages/Queue/Queue';
import { Alert } from '@/components/customs/Alert';
import Home from '@/pages/Home/Home';
// import { departments } from '@/data/departements';

function SelectTime() {

    const { timeSlots, timeSlot, departmentName, allDepartements } = useContext(Context);
    const disbaledButton = timeSlot == '';
    const [queueJoined, setQueueJoined] = useState(false);

    console.log(timeSlots);
    
    const navigate = useNavigate();

    const promiseFunction = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                try {
                    res("Queue Joined Successfully!"); // change to join queue
                } catch (err) {
                    throw new Error(err);
                }
            }, 1500);
        })
    }
    const handleClick = () => {
        toast.promise(promiseFunction().then((message) => {
            setQueueJoined(true);
        }),
            {
                loading: 'Processing...',
                success: "Joined Successfully",
                error: 'Failed to join Queue!!',
            }
        );
    }

    useEffect(() => {
        if (!departmentName) navigate("/");
    }, [departmentName])

    return (
        <>
            {
                !departmentName && <Home />
            }
            {!queueJoined && departmentName &&
                <>
                    <div className='page px-20 py-5 flex items-center justify-center flex-col w-full min-h-screen'>
                        <h3 className='text-3xl mb-3 font-semibold '>Select Time</h3>
                        <div className="list flex gap-2 flex-col mb-2">
                            {timeSlots.map((time, index) => {
                                return <Time key={index} time={time} />
                            })}
                        </div>
                        <Alert buttonClass={"active:scale-95 transition-all"} buttonFunction={handleClick} buttonText="Join Queue" alertTitle="Confirm Join The Queue" AlertDescription={<>
                            <b>Department</b> {departmentName} <br /> <b>Time:</b> {timeSlot}
                        </>} />
                    </div>
                </>}
            {queueJoined &&
                <>
                    <Queue />
                </>
            }
        </>
    )
}

export default SelectTime