import React from 'react'
import { Link } from 'react-router-dom';
import { SayHello } from '../Services/dataServices';

export default function HomePageComponents() {
  return (
    <div className='HomeBG height' >
  <h1 className="text-center font-Modak text-7xl text-custom-red drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,4)] pt-16">
    All <span className="text-custom-yellow">for</span>{" "}
    <span className="text-custom-blue">One</span>
  </h1>
  <div className="hidden sm:block">
    <h1 className="text-center font-Modak text-5xl text-custom-purple drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,4)] pt-16">
      Pick A Mini Challenge
    </h1>
  </div>
  <div className="block sm:hidden">
    <h1 className="text-center font-Modak text-4xl text-custom-purple drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,4)] pt-8">
      Pick A Mini Challenge
    </h1>
  </div>
  <div className="container-fluid pt-48 hidden sm:block justify-center">
    <div className="div pt-12 hidden sm:block">
      <div className="flex">
        <div className="flex-1 pl-44">
          <Link to={'SayHelloPage'} >
            <button
              type="button"
              className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-red rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 font-Unlock"
            >
              <h1>
                <span className="text-custom-red">hh</span> Say{" "}
                <span className="text-custom-red">hh</span>
              </h1>{" "}
              Hello
            </button>
          </Link>
        </div>
        <div className="flex-1">
          <Link to={'AddingPage'} >
            <button
              type="button"
              className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-yellow rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700 font-Unlock"
            >
              Adding<h1>Numbers</h1>{" "}
            </button>
          </Link>
        </div>
        <div className="flex-1">
          <Link to={'AskingQuestionPage'} >
            <button
              type="button"
              className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-blue rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700 font-Unlock"
            >
              <h1>Asking</h1> Questions
            </button>
          </Link>
        </div>

        <div className="flex-1 ">
          <Link to={'ComparePage'} >
            <button
              type="button"
              className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-orange rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700 font-Unlock"
            >
              <h1>&lt; than</h1>
              <h1 /> &gt; than, = to{" "}
            </button>
          </Link>
        </div>

        <div className="flex-1">
          <Link to={'MadlibPage'} >
            <button
              type="button"
              className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-green rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700 font-Unlock"
            >
              Madlib <h1>Generator</h1>
            </button>
          </Link>
        </div>

      </div>
    </div>
  </div>
  <div className="container-fluid pt-1 hidden sm:block justify-center">
    <div className="div pt-2 hidden sm:block">
      <div className="flex">
        <div className="flex-1 pl-44">
          <Link to={'OddEvenPage'} >
            <button
              type="button"
              className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-green rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white  :hover:bg-gray-700 font-Unlock"
            >
              <h1>
                <span className="text-custom-green">hh</span> Odd{" "}
                <span className="text-custom-green">hh</span>{" "}
              </h1>{" "}
              Even
            </button>
          </Link>
        </div>

        <div className="flex-1">
          <Link to={'ReversedStringPage'} >
            <button
              type="button"
              className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-red rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700 font-Unlock"
            >
              Reverse it <h1>(string)</h1>{" "}
            </button>
          </Link>
        </div>

        <div className="flex-1">
          <Link to={'ReversedIntPage'} > 
            <button
              type="button"
              className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-yellow rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700 font-Unlock"
            >
              <h1>Reverse it</h1>(number)
            </button>
          </Link>
        </div>

        <div className="flex-1 ">
          <Link to={'EightBallPage'} >
            <button
              type="button"
              className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-blue rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700 font-Unlock"
            >
              <span className="text-custom-blue">8b</span> Magic{" "}
              <span className="text-custom-blue">all</span>
              <h1>8 ball</h1>{" "}
            </button>
          </Link>
        </div>

        <div className="flex-1">
          <Link to={'RestaurantPage'} >
            <button
              type="button"
              className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-orange rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700 font-Unlock"
            >
              restaurant <h1>picker</h1>{" "}
            </button>
          </Link>
        </div>

      </div>
    </div>
  </div>
  <div className="container-fluid justify-center">
    <div className="div block sm:hidden">
      <div className="flex justify-center">
        <Link to={'SayHelloPage'} >
          <button
            type="button"
            className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-red rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600  -700 font-Unlock"
          >
            <h1>
              <span className="text-custom-red">hh</span> Say{" "}
              <span className="text-custom-red">hh</span>
            </h1>{" "}
            Hello
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <Link to={'AddingPage'} >
          <button
            type="button"
            className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-yellow rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200   -400 -600  -700 font-Unlock"
          >
            Adding<h1>Numbers</h1>{" "}
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <Link to={'AskingQuestionPage'} >
          <button
            type="button"
            className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-blue rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200   -400 -600  -700 font-Unlock"
          >
            <h1>Asking</h1> Questions
          </button>
        </Link>
      </div>

      <div className="flex justify-center">
        <Link to={'ComparePage'} >
          <button
            type="button"
            className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-orange rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200   -400 -600  -700 font-Unlock"
          >
            <h1>&lt; than</h1>
            <h1 /> &gt; than, = to{" "}
          </button>
        </Link>
      </div>

      <div className="flex justify-center">
        <Link to={'MadlibPage'} >
          <button
            type="button"
            className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-green rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200   -400 -600  -700 font-Unlock"
          >
            Madlib <h1>Generator</h1>
          </button>
        </Link>
      </div>
   
    </div>
  </div>
  <div className="container-fluid justify-center">
    <div className="div pt-2 block sm:hidden">
      <div className="flex justify-center">
        <Link to={'OddEvenPage'} >
          <button
            type="button"
            className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-green rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200   -400 -600   -700 font-Unlock"
          >
            <h1>
              <span className="text-custom-green">hh</span> Odd{" "}
              <span className="text-custom-green">hh</span>{" "}
            </h1>{" "}
            Even
          </button>
        </Link>
      </div>

      <div className="flex justify-center">
        <Link to={'ReversedStringPage'} >
          <button
            type="button"
            className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-red rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200    -700 font-Unlock"
          >
            Reverse it <h1>(string)</h1>{" "}
          </button>
        </Link>
      </div>

      <div className="flex justify-center">
        <Link to={'ReversedIntPage'} >
          <button
            type="button"
            className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-yellow rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200    -700 font-Unlock"
          >
            <h1>Reverse it</h1>(number)
          </button>
        </Link>
      </div>

      <div className="flex justify-center">
        <Link to={'EightBallPage'} >
          <button
            type="button"
            className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-blue rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200    font-Unlock"
          >
            <span className="text-custom-blue">8b</span> Magic{" "}
            <span className="text-custom-blue">all</span>
            <h1>8 ball</h1>{" "}
          </button>
        </Link>
      </div>

      <div className="flex justify-center">
        <Link to={'RestaurantPage'} >
          <button
            type="button"
            className="py-3.5 px-10 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-custom-orange rounded-full border border-gray-200 hover:opacity-75 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200  -600  font-Unlock"
          >
            restaurant <h1>picker</h1>{" "}
          </button>
        </Link>
      </div>
    </div>
  </div>

    </div>
    
  )
}
