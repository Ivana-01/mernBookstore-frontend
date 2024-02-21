import React from 'react'
import { Link } from 'react-router-dom'
import img from '../img/home bg.png'
import '../styles/Home.css'

function Home() {
    
  return (
    <div className='home'>
        <div className="imgbg">
            <img src={ img } alt="Bookstore" className='bg' />
        </div>
        <div className="info">
          <h1>Welcome to the Bookstore</h1>
          <p>Here you can find all your favorite books</p>
          <button className="booksLinkBtn">
            <Link to='/books' className='booksLink'>Browse Books</Link>
          </button>
        </div>
    </div>
  )
}

export default Home