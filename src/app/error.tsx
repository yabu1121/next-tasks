'use client'

import Link from "next/link"

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800">
      
      <h1 className="text-9xl font-extrabold text-indigo-600 mb-4">
        error
      </h1>
      
      <p className="text-2xl font-semibold mb-8">
        unexpected error occured
      </p>
      
      <Link 
        href='/'
        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg 
                   hover:bg-indigo-700 transition duration-150 transform hover:scale-105"
      >
        go back home
      </Link>
    </div>
  )
}

export default ErrorPage