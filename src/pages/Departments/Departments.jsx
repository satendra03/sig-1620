import React, { useContext, useEffect, useState } from 'react'
import Department from './Department';
import { Context } from '@/context/Context'
import { Button } from '@/components/ui/button';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';
// import { departments } from '@/data/departements';

function Departments() {

    const { departmentName } = useContext(Context);
    const buttonDisabled = departmentName == "";
    const [departments, setDepartments] = useState(null);
    const [loading, setLoading] = useState(true);
    const [Error, setError] = useState(false);

    
    let api = `http://192.168.1.40:5000/getDepartments`;
    // Define async function inside useEffect
    const getDepartments = async () => {
            try {
                setLoading(true);
                const response = await axios.get(api);

                if (response.status === 200) { // Axios uses status, not ok
                    setDepartments(response.data); // Access data from Axios response
                }
            } catch (err) {
                setError(err); // Handle errors
                console.error(err);
            } finally {
                setLoading(false);
            }
       
    };

    // Call the function inside useEffect
    useEffect(() => {
        getDepartments();
    }, []);


    if (loading) return <Loading />




    return (
        <>
            <div className="departments px-20 py-10 flex items-center justify-center flex-col w-full min-h-screen ">
                <h3 className='text-3xl mb-3 font-semibold '>Select Department</h3>
                <div className="list grid gap-5 grid-cols-4 mb-3">
                    {departments?.map((department, index) => {
                        return <Department department={department} key={index} />
                    })}
                </div>


                <Button disabled={buttonDisabled} className="active:scale-95 transition-all"><Link to={`/departments/${departmentName}/book`}>{buttonDisabled ? "Select Department" : "Select Time Slot"}</Link></Button>
            </div>
        </>
    )
}

export default Departments