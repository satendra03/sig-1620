import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from '@/components/ui/button';
import { Context } from '@/context/Context';
import { fetchImages } from '@/lib/fetchImages';
import Loading from '@/pages/Loading/Loading';
import Nopage from '@/pages/NoPage/Nopage';

// Department Info page
function DepartmentInfo() {
    let departmentName = useParams().departmentName;
    const {allDepartements} = useContext(Context);
    console.log("departments", allDepartements);
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { setDepartmentName } = useContext(Context);
    console.log("from info card ", departmentName);

    const getDepartmentDescription = (departments, departmentName) => {
        const department = departments.find(dept => dept.departmentName == departmentName);
        return department.description;
      };
      
    const handleClick = () => {
        setDepartmentName(departmentName);
    }

    const [Image, setImage] = useState([]);
    useEffect(()=>{
        const loadImage = async () =>{
            try {
                setLoading(true);
                const img = await fetchImages({ query: departmentName, perPage: 4, orientation: 'square' });
                console.log(img);
            } catch (error) {
                console.log('Error', error.message);
                setError(error.message);
            } finally{
                setLoading(false);
            }
        }
        loadImage();
        const desc = getDepartmentDescription(allDepartements, departmentName);
        setDescription(desc);
    },[])

    if(loading) return <Loading />;
    if(error == "") return <Nopage />

    return (
        <>
            <div className="department-info px-20 py-10 mt-20 flex flex-col items-center">
                <div className="heading">
                    <h2 className="scroll-m-20 text-center border-b pb-2 text-5xl font-semibold tracking-tight">
                        {departmentName}
                    </h2>
                </div>
                <div className="content">
                    <div className="container flex p-10 gap-5">
                        <div className="img-container w-full border h-[60vh]">
                            <img src="" alt="" />
                        </div>
                        <div className="text-container border w-full">
                            <div className="text-xl text-muted-foreground p-3 bg-black/70 rounded-lg">
                                <ScrollArea className="h-[60vh] w-full  rounded-md p-1 text-white">
                                    {description}
                                </ScrollArea>
                            </div>
                        </div>
                    </div>
                </div>
                <Link onClick={handleClick} to={`/departments/${departmentName}/book`}>
                    <Button>Book Apponitment</Button>
                </Link>
            </div>
        </>
    )
}

export default DepartmentInfo