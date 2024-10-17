import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
<div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-200">
  <div className="py-5">
    <Link
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-opacity-90 focus:ring-4 focus:ring-purple-300"
      to="/student"
    >
      Add Record
    </Link>
  </div>
</div>

    )
}

export default Home
