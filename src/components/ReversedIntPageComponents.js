import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IntReverse } from '../Services/dataServices.js';

export default function ReversedIntPageComponents() {

    const [numOne, setnumOne] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const response = await IntReverse(numOne);
        setResult(response)
    }

  return (
    <div className='GameBg height'>
    <div className="hidden sm:block p-4">
    <Link  to={'/'} >
      <button
        type="button"
        className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-green rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 font-Unlock"
      >
        Home
      </button>
    </Link>
  </div>

  <h1 className="text-center font-Modak text-7xl text-custom-yellow drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,4)] pt-16">
    Mini Challenge 8
  </h1>
  <h1
    className="text-center font-Modak text-5xl text-custom-purple drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,4)] pt-16"
  >
    {result === "" ? "... reversed is ..." : result}
  </h1>
  <div className="flex justify-center">
    <div className="mt-16">
      <input onChange={(e) => setnumOne(e.target.value)}
        type="text"
        placeholder="Type a number...."
        className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 "
      />
    </div>
  </div>
  <div className="flex justify-center">
    <div className="flex mt-28">
      <button onClick={() => getResult()}
        type="button"
        className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-purple rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 font-Unlock"
      >
        Submit
      </button>
    </div>
  </div>

  <div className="block sm:hidden">
      <div className="flex justify-center">
        <Link to={'/'} >
          <button
            type="button"
            className="py-3.3 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-red rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 font-Unlock"
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}
