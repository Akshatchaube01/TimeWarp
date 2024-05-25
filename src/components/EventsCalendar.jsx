
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './EventsCalendar.css';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      let allEvents = [];
      for (let month = 1; month <= 12; month++) {
        for (let day = 1; day <= 31; day++) {
          const response = await fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`);
          const data = await response.json();
          data.events.forEach(event => {
            const eventDate = new Date(event.year, month - 1, day);
            allEvents.push({
              title: event.text,
              start: eventDate.toISOString().split('T')[0],
            });
          });
        }
      }
      setEvents(allEvents);
    };

    fetchEvents();
  }, []);

  return (
    <div className=" p-4 max-w-md">
      <div className="bg-black shadow-md rounded-lg p-4">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="auto"
          dayCellContent={renderDay} // Custom render function for day cell content
        />
      </div>
    </div>
  );
};

const renderDay = ({ date }) => {
  const today = new Date(); 
  const isToday = date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
  if (isToday) {
    return <span style={{ color: 'blue', }}>{date.getDate()}</span>; // Change color to blue for today's date
  }
  return <span>{date.getDate()}</span>;
};

export default Calendar;
