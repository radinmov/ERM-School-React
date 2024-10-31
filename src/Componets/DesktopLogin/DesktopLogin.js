import React from 'react'
import LoginForm from '../LoginForm/LoginForm'
import WellcomeSquare from '../WellcomeSquare/WellcomeSquare'

const DesktopLogin = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">    
      <div className="relative w-1/2">
        <WellcomeSquare />
        <div className="bg-white absolute top-5 left-5 w-4/5 h-2/3 p-5 border-2 border-black rounded-xl flex items-center justify-center">
          <LoginForm />      
        </div>
      </div>         
    </div>
  )
}

export default DesktopLogin
