import React from 'react'

const InputField = ({type , placeholder , icon}) => {
  return (
    <div  className='flex items-center bg-gray-200 rounded-lg p-2 mb-6 m-6 border-l-8 border-blue-600 shadow-md'>
      <span className='text-blue-600 mr-2 '>{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className='bg-transparent outline-none w-full text-gray-600 text-right' 
      />
    </div>
  )
}

export default InputField
