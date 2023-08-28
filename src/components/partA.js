import React from 'react'
import Application from './application'
import Box from './box';

const PartA = () => {
  return (
    <div className='PartA'>
      
    
    <input type="text" name="name" className='title' placeholder='Add Title' />
    <div className='objective'>
    <input type="text" name="Objective" className='tarea' placeholder='Objective' />
    </div>
    <div className='content'><input type="text" name="Content" className='tarea' placeholder='Content' />
    </div>
    <Application/>
    <Box title='Relevence to Subject'/>
    <Box title='Skill gained'/>
    <Box title='Events'/>
    <Box title='Problem'/>
    <Box title='Career Path'/>
    </div>
  )
}

export default PartA
