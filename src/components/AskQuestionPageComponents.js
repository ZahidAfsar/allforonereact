import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { askingQuestion } from '../Services/dataServices.js'

export default function AskQuestionPageComponents() {
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
