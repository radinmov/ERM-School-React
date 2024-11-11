import React, { useState } from 'react';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import DatePicker, { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export const Ticketing = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev);
  };
  return (
    <div className="h-screen flex flex-col ">
      <div className="flex flex-row max-md:hidden">
        <Sidebar />
        <main className="flex-1 flex-col p-4 md:p-8 max-md:hidden">
          <button onClick={toggleCalendar}>
            {isCalendarOpen ? "Close Calendar" : "Open Calendar"}
          </button>
          {isCalendarOpen && (
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          
        />
      )}
        </main>

      </div>

    </div>
  );
};