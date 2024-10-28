import React from 'react'
import LoginForm from '../LoginForm/LoginForm'
import WelcomeSection from '../WelcomeSection/WelcomeSection'

const DesktopLogin = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
       
        <div className='w-3/4 lg:w-1/2 xl:w-2/3 flex bg-white rounded-lg overflow-hidden'>
            <LoginForm />
            <WelcomeSection />
        </div>
    </div>
  )
}

export default DesktopLogin