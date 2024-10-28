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
      <button className='flex flex-row mt-6 mx-auto  bg-blue-600 rounded-lg  text-white p-3 '>
        <span className='px-1'>srh</span>
        <p className='font-extrabold items-center'>
          ورود
        </p>
      </button>
    </div>  
  )
}

