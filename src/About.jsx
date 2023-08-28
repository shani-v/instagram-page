import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='flex justify-center items-center w-full h-screen'>
        <Link to='https://react-chat-app-df5d7.web.app/'>
          <button className='bg-green-500 p-3 text-lg w-52 rounded-md font-semibold'>
            Click here
          </button>
        </Link>
      </div>
    </div>
  )
}

export default About
