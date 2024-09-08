import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Dropdown } from '@/components/customs/Dropdown';

// Function to generate a random alphanumeric token
const generateToken = (length) => {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    token += charset[randomIndex];
  }
  return token;
};

function Queue() {
  let location = useParams();
  const languages = ["Hindi", "English", "Punjabi", "Marathi", "Bangali"];
  const [number, setNumber] = useState();
  const [token, setToken] = useState('');

  useEffect(() => {
    // Generate a random number for queue position
    const temp = Math.floor(Math.random() * 10);
    setNumber(temp);
    
    // Generate a random alphanumeric token
    setToken(generateToken(8)); // Adjust length as needed
  }, []);

  return (
    <>
      <div className="queue px-40 mt-20 h-screen w-full ">
        <div className="container p-5 h-full flex flex-col">
          <div className="navigation mb-6 h-10 flex justify-between items-center px-10">
            <Link to={"/departments"}>
              <Button variant="secondary" className="w-28 transition-all active:scale-95 hover:shadow-sm">
                <ArrowLeft size={20} />
                <p className='text-[1.2vw]'>Back</p>
              </Button>
            </Link>
            <div className='language border-black/40 rounded-lg border'>
              <Dropdown buttonTitle="Language" options={languages} />
            </div>
          </div>
          <div className="img and info flex flex-col items-center justify-center">
            <div>
              <div className="img-token mb-5">
                <h2 className='font-semibold text-2xl w-full text-center'>{`Token Number: ${token}`}</h2>
                <div className="imgcontianer w-80">
                  <img className='object-cover' src="/Images/Queue.png" alt="Queue" />
                </div>
              </div>
              <div className="info flex flex-col gap-7 mb-3">
                <div className="queue-number">
                  <h3 className='text-xl font-bold'>Queue Position:</h3>
                  <p className='text-black/70'>{`${number} people ahead`}</p>
                </div>
                <div className="estimated-time">
                  <h3 className='text-xl font-bold'>Wait Time:</h3>
                  <p className='text-black/70'>{`${number * 5} mins`}</p>
                </div>
              </div>
              <Link to={"/departments"}>
                <Button variant="destructive" className="w-full active:scale-95 transition-all">Leave the Queue</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Queue;
