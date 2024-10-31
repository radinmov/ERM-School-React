import React from 'react'

const InputField = ({type , placeholder , icon}) => {
  return (
    <div dir='ltr' className='flex items-center  bg-gray-200 rounded-lg p-1 mb-6 border-l-8 border-blue-600 shadow-md h-14'>
      <span className='text-blue-600 mr-2 flex items-center text-center border-r-2 border-gray-400 px-1 h-4/5'>{icon}gngn</span>
      <input
        type={type}
        placeholder={placeholder}
        className='bg-transparent outline-none w-full text-gray-600 text-right h-4/5 mr-1' 
      />
    </div>
  )
}

export default InputField
