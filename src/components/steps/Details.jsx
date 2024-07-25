import React from 'react'
import { useContext } from 'react';
import { StepperContext } from '../context/StepperContext';


function Details({errors,setErrors}) {
  const {userData, setUserData} = useContext(StepperContext);
  
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUserData({...userData, [name]:value})

    // setErrors({ ...errors, [name]: '' });
  }

  return (
    <div className='flex flex-col'>
      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
          Address
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["address"] || ""}
          name='address'
          placeholder='Address'
          type='text'
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
          <p className='text-red-600'>{errors.address}</p>
        </div>

      </div>

      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
          City
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["city"] || ""}
          name='city'
          placeholder='City'
          type='text'
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
          <p className='text-red-600'>{errors.city}</p>
        </div>
      </div>

      {/* <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
          Pin
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["pin"] || ""}
          name='pin'
          placeholder='Pin'
          type='number'
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
        </div>
      </div> */}

      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
          Country
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["country"] || ""}
          name='country'
          placeholder='Country'
          type='text'
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
          <p className='text-red-600'>{errors.country}</p>
        </div>
      </div>
    </div>
  )
}

export default Details