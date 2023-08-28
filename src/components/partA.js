import React from 'react'
import Application from './application'

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
    </div>
  )
}

export default PartA
