import React from 'react'
import { useContext } from 'react'
import { StepperContext } from '../context/StepperContext'


function Payment({errors,setErrors}) {

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
          Credit Card
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["creditCard"] || ""}
          name='creditCard'
          placeholder='Credit Card'
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
          <p className='text-red-600'>{errors.creditCard}</p>
        </div>

      </div>

      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
          Expiry
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["expiry"] || ""}
          name='expiry'
          placeholder='Expiry'
          type='Date'
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
          <p className='text-red-600'>{errors.expiry}</p>
        </div>

      </div>
    </div>
  )
}

export default Payment