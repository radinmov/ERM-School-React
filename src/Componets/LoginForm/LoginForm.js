import React from 'react'
import InputField from '../InputField/InputField'

export default function LoginForm  ({icon}) {
  return (
    <div className='w-4/5 mx-auto text-center mt-6 '>
      <h2 className='font-bold text-2xl mb-6'>صفحه  ورود</h2>
        <InputField type='text' placeholder='نام کاربری'/>
        <InputField type='password' placeholder='رمز عبور'/>
        <div className='flex justify-between items-center text-sm mt-4'>
          <label className='flex items-center text-center justify-center'>
            مرا به یاد داشته باش
          <input type='checkbox' className='mr-1 flex items-end justify-center' /> 
          </label>        
          <a href='/' className='text-blue-600'>فراموشی رمز عبور!</a>
        </div>
      <button className=' mt-4 mx-auto  bg-blue-600 rounded-lg  text-white px-4 py-2 flex items-center'>
        <p className='font-extrabold items-center px-2'>
           ورود
        </p>
        <span className='ml-2'>srh</span>
      </button>
    </div>  
  )
}

