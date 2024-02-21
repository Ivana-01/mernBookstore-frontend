import React from 'react'
import logo from '../img/book.png'
import mern from '../img/mern.png'
import '../styles/Nav.css'
function nav() {
  return (
    <div className='nav'>
      <img src={logo} className="logo" alt="logo" />
      <div className="text">
        <h2>MERN stack <img src={ mern } alt="mern stack" className='mern'/></h2>
        <h1>Bookstore</h1>
      </div>
    </div>
  )
}

export default nav