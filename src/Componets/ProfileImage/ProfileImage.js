import React from 'react';

const ProfileImage = ({ width = 'w-36', height = 'h-36' }) => {
  return (
    <> 
      <img 
        className={`${width} ${height} bg-gray-600 rounded-full md:rounded-lg mx-auto mt-4`} 
        src="https://via.placeholder.com/150" 
        alt="Profile Image"
      />
    </>
  );
}

export default ProfileImage;

