import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/ShowBook.css'
import img from '../img/bookDetails.png'
import { URL } from '../App'

function ShowBook() {
  const [books, setBooks] = useState([])
  const { id } = useParams();
  useEffect(() => {
    fetch(`${URL}/books/${id}`)
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.log(err))
  })
  return (
    <div className='bookShow'>
      <div className="imgDetail">
        <img src={ img } alt="book" />
      </div>
      <div className="details">
        <h1>Book Details</h1>
        <p className='bookTitle'>Title: {books.title}</p>
        <p className='bookAuthor'>Author: {books.author}</p>
        <p className='bookPY'>Publish Year: {books.publishYear}</p>
      </div>
    </div>
  )
}

export default ShowBook