import React from 'react';
import Sidebar from '../../layouts/Sidebar/Sidebar';

export const Ticketing = () => {
 
return (
      <div className="h-screen flex flex-col ">
        <div className="flex flex-row max-md:hidden">
          <Sidebar />
          <main className="flex-1 flex-col p-4 md:p-8 max-md:hidden">
          Ticketing
          </main>
           
        </div>
      
      </div>
  );
};