import React from 'react'

function Final() {
    return (
        <div className='flex flex-col items-center'>
            <div className='text-6xl text-green-600'>
                <a href="#"><i className="ri-checkbox-circle-line"></i></a>
            </div>
            <div className='text-2xl font-semibold text-black text-center mt-5'>
                <p>Congradulation</p>
                <p>Your Account is open Now</p>
            </div>
            <a className='mt-10' href='/'>
                <button className='border border-gray-400 bg-slate-200 rounded-xl px-4 py-1 hover:bg-green-700 hover:text-white'>Close</button>
            </a>
        </div>
    )
}

export default Final
