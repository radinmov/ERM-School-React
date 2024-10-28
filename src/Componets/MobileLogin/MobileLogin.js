import React from 'react'
import HeaderCurve from '../HeaderCurve/HeaderCurve'
import ProfileImage from '../ProfileImage/ProfileImage'
import InputField from '../InputField/InputField'

const MobileLogin = () => {
  return (
    <div>
      <HeaderCurve />
      <ProfileImage />
      <h3 className='text-center font-extrabold text-2xl mt-2'>صفحه  ورود</h3>
      <InputField />
      <InputField />
    </div>
  )
}

export default MobileLogin