import React from 'react'
import { MdOutlineQueueMusic } from 'react-icons/md'

const Header = () => {
  return (
    <nav className='navbar bg-light'>
      <div className='container'>
        <div className='fs-1' ><MdOutlineQueueMusic style={{ color: 'goldenrod' }} className='fs-1' /><span style={{ color: "	rgb(70, 130, 180)" }}>Song Library</span></div>
      </div>
    </nav>
  )
}

export default Header
