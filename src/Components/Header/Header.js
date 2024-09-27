import React from 'react'
import "./header.css"
import logoimage from "../../Assets/jira-logo-png.png"

const Header = () => {
  return (
    <header className='header-cont'>
        <div className='logo'>
            <img src={logoimage} alt="" />

        </div>
        <div className='heading'>J I R A</div>
        <div className='profile'>profile</div>
    </header>
  )
}

export default Header