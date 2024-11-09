import React from 'react';

const GradeButton = ({ width = 'w-4/5', height = 'h-36' }) => {
  return (
    <> 
      <button 
        className={`${width} ${height} rounded-sm md:rounded-lg mx-auto mt-4 border-[(142deg, rgba(85,63,251,1) 24%, rgba(252,70,236,1) 69%)]  border-spacing-11`} 
      >
        نمزات ئدذبانل
      </button>
    </>
  );
}

export default GradeButton;


