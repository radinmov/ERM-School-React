import React from 'react'
import InputField from '../InputField/InputField'

export default function LoginForm  ({icon}) {
  return (
    <div className='w-4/5 mx-auto text-center mt-6 '>
      <h2 className='font-bold text-2xl mb-6'>صفحه  ورود</h2>
        <InputField type='text' placeholder='نام کاربری'/>
        <InputField type='password' placeholder='رمز عبور'/>
        <div className='flex justify-between items-center text-sm mt-4'>
        <a href='/' className='text-blue-600'>فراموشی رمز عبور!</a>
          <label className='flex items-center'>
            <input type='checkbox' className='mr-1' />
            من را به یاد داشته باش
          </label>
        </div>
      <button className=' mt-4 mx-auto  bg-blue-600 rounded-lg  text-white px-4 py-2 flex items-center'>
        <span className='ml-2'>srh</span>
        <p className='font-extrabold items-center'>
          ورود
        </p>
      </button>
    </div>  
  )
}

