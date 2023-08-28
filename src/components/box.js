import React from 'react'
import AddIcon from '@mui/icons-material/Add';
const Box = (props) => {
  return (
    <div className='box'>
      {props.title}
      <AddIcon className='boxadd'/>
    </div>
  )
}

export default Box
