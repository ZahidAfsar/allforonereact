import React from 'react';
import {useState} from 'react';
import { addNumbers } from './Services/dataServices.js';

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
    <div>
      <input onChange={(e) => setNumOne(e.target.value)} ></input>
    </div>
    <div>
      <input onChange={(e) => setNumTwo(e.target.value)} ></input>
    </div>
    <div>
      <button  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded" onClick={() => getResult()} >Get Results</button>
    </div>
    <div>
      <p>{result}</p>
    </div>
    </>
  );
}
