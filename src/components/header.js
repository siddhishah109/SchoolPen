import React from 'react'
import Headerbox from './headerbox'

const Header = () => {
  return (
    <div className='Header'>
      <Headerbox title='RBSE'/>
      <Headerbox title='9th'/>
      <Headerbox title='English'/>
      <Headerbox title='NCERT'/>
      <Headerbox title='Beehive'/>
    </div>
  )
}

export default Header
