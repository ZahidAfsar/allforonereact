import React from 'react';
import {useState} from 'react';
import { addNumbers } from '../Services/dataServices.js';
import { Link } from 'react-router-dom';

export default function AddingPage() {

    const [numOne, setNumOne] = useState('');
    const [numTwo, setNumTwo] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
    const response = await addNumbers(numOne, numTwo);
    setResult(response)
  }

  return (
    <>
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
      Mini Challenge 2
    </h1>
    <h1
      id="SayHelloText"
      className="text-center font-Modak text-5xl text-custom-purple drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,4)] pt-16"
    >
      ... + ... = ...
    </h1>
    <div className="container-fluid hidden sm:block">
      <div className="flex justify-center">
        <div className="mt-16">
          <input
            type="text"
            placeholder="Type your num1...."
            id="num1big"
            className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5"
          />
        </div>
        <div className="mt-16 ml-2">
          <input
            type="text"
            placeholder="Type your num2...."
            id="num2big"
            className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5"
          />
        </div>
      </div>
    </div>
    <div className="container block sm:hidden">
      <div className="flex justify-center">
        <div className="mt-16">
          <input
            type="text"
            placeholder="Type your num1...."
            id="num1"
            className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type your num2...."
            id="num2"
            className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 "
          />
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="flex mt-28">
        <button
          id="SubmitBtn"
          type="button"
          className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-purple rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 font-Unlock"
        >
          Submit
        </button>
      </div>
    </div>
    <div className="block sm:hidden">
      <div className="flex justify-center">
        <Link to={'/'}>
          <button
            type="button"
            className="py-3.3 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-red rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 font-Unlock"
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  </>
  );
}
