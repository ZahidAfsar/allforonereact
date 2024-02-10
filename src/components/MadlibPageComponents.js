import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Madlib } from '../Services/dataServices.js'

export default function MadlibPageComponents() {


    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [verb, setVerb] = useState('');
    const [nameTwo, setnameTwo] = useState('');
    const [noun, setNoun] = useState('');
    const [nounTwo, setnounTwo] = useState('');
    const [verbTwo, setverbTwo] = useState('');
    const [nounThree, setnounThree] = useState('');
    const [nounFour, setnounFour] = useState('');
    const [creatureName, setCreatureName] = useState('');
    const [weaponName, setWeaponName] = useState('');
    const [result, setResult] = useState('');
  
    const getResult = async () => {
      const response = await Madlib(name, username, verb, nameTwo, noun, nounTwo, verbTwo, nounThree, nounFour, creatureName, weaponName) ;
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

  <h1 className="text-center font-Modak text-7xl text-custom-green drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,4)] pt-16">
    Mini Challenge 5
  </h1>
  <h1
    id="SayHelloText"
    className="text-center font-Modak text-5xl text-custom-purple drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,4)] pt-16"
  >
  {result === "" ? "story ...." : result}
  </h1>
  <div className="container-fluid hidden sm:block">
    <div className="flex justify-center">
      <div className="mt-16">
        <input onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Type a name...."
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
      <div className="mt-16 ml-2">
        <input onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Type your name...."
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
      <div className="mt-16 ml-2">
        <input onChange={(e) => setVerb(e.target.value)}
          type="text"
          placeholder="Type a verb...."
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mt-4">
        <input onChange={(e) => setnameTwo(e.target.value)}
          type="text"
          placeholder="Type a name...."
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
      <div className="mt-4 ml-2">
        <input onChange={(e) => setNoun(e.target.value)}
          type="text"
          placeholder="Type a noun...."
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
      <div className="mt-4 ml-2">
        <input onChange={(e) => setnounTwo(e.target.value)}
          type="text"
          placeholder="Type a noun...."
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mt-4">
        <input onChange={(e) => setverbTwo(e.target.value)}
          type="text"
          placeholder="Type a verb...."
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
      <div className="mt-4 ml-2">
        <input onChange={(e) => setnounThree(e.target.value)}
          type="text"
          placeholder="Type a noun...."
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
      <div className="mt-4 ml-2">
        <input onChange={(e) => setnounFour(e.target.value)}
          type="text"
          placeholder="Type a noun...."
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mt-4">
        <input onChange={(e) => setCreatureName(e.target.value)}
          type="text"
          placeholder="name a creature...."
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
      <div className="mt-4 ml-2">
        <input onChange={(e) => setWeaponName(e.target.value)}
          type="text"
          placeholder="name a weapon...."
          id="weaponName"
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
      <div className="flex mt-4 ml-2">
        <button onClick={() => getResult()}
          type="button"
          className="py-2.5 px-40 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-purple  rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700 font-Unlock"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
  <div className="container block sm:hidden">
    <div className="flex justify-center">
      <div className="mt-4">
        <input
          type="text"
          placeholder="type a name...."
          id="nameSMALL"
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mt-4">
        <input
          type="text"
          placeholder="type your name...."
          id="usernameSMALL"
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mt-4">
        <input
          type="text"
          placeholder="type a verb...."
          id="verbSMALL"
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mt-4">
        <input
          type="text"
          placeholder="type a name...."
          id="nameTwoSMALL"
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mt-4">
        <input
          type="text"
          placeholder="type a noun...."
          id="nounSMALL"
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mt-4">
        <input
          type="text"
          placeholder="type another noun...."
          id="nounTwoSMALL"
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mt-4">
        <input
          type="text"
          placeholder="type a verb...."
          id="verbTwoSMALL"
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mt-4">
        <input
          type="text"
          placeholder="type a noun...."
          id="nounThreeSMALL"
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mt-4">
        <input
          type="text"
          placeholder="type a noun...."
          id="nounFourSMALL"
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mt-4">
        <input
          type="text"
          placeholder="name a creature...."
          id="creatureNameSMALL"
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mt-4">
        <input
          type="text"
          placeholder="name a weapon...."
          id="weaponNameSMALL"
          className="bg-gray-200 border font-Unlock border-gray-300 text-gray-900 text-sm rounded-full block w-96 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="flex mt-4 ml-2">
        <button
          id="SubmitBtnSMALL"
          type="button"
          className="py-2.5 px-40 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-purple  rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700 font-Unlock"
        >
          Submit
        </button>
      </div>
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
  </>
  )
}
