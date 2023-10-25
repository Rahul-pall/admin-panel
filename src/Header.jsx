import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <strong>Hello Shahrukh 👋</strong>
        </div>
        <div className='header-right'>
         <input type="text" placeholder='Search'/>
        </div>
    </header>
  )
}

export default Header