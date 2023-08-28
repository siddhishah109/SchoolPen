import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import PartA from './partA';
const DayLine = () => {
    const [days, setDays] = useState([
        { day: 'Day 1', content: <PartA/> },
        { day: 'Day 2', content: 'tab 2' },
      
      ]);
    
      const [selectedDay, setSelectedDay] = useState(0);
    
      const addDay = () => {
        const newDay = { day: `Day ${days.length + 1}`, content: '' };
        setDays([...days, newDay]);
      };
    
      const handleTabClick = (index) => {
        setSelectedDay(index);
      };
    
      const handleContentChange = (index, content) => {
        const updatedDays = [...days];
        updatedDays[index].content = content;
        setDays(updatedDays);
      };
        return (
    <div className='dayline'>
      <div className="tab-list ">
        {days.map((day, index) => (
          <div
            key={index}
            className={`tab ${selectedDay === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
     {day.day}
          </div>
        ))}
        <AddIcon onClick={addDay} className='add' />
      </div>
      <div className="tab-content">
        {days.map((day, index) => (
          <div
            key={index}
            className={`tab-panel ${selectedDay === index ? 'activeContent' : 'hidden'}`}
          >
            {day.content}
          </div>
        ))}
      </div>
   
    </div>
  )
}

export default DayLine
