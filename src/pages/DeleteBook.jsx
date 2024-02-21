import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/DeleteBook.css'
import { URL } from '../App';

function DeleteBook() {
  const { id } = useParams();
    const handleBook = (e) => {
      e.preventDefault();
      axios.delete(`${URL}/books/${id}`)
      .then(window.location.href = '/books')
      .catch(err => console.log(err))
      };
  return (
    <div className='delete'>
      <h1>Delete Book</h1>
      <p>Are you sure you want to delete this book?</p>
      <button onClick={handleBook}>Delete</button>
    </div>
  )
}

export default DeleteBook