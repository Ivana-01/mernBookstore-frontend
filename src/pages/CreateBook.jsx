import React, { useState } from 'react'
import axios from 'axios';
import '../styles/CreateBook.css'

function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const handleBook = (e) => {
    e.preventDefault();
    const book = { title, author, publishYear };
    axios.post('http://localhost:5555/books', book)
    .then(res => {
      console.log(res.data);
      alert('Book created');
      window.location.href = '/books';
    })
    .catch(err => console.log(err));
  }
  return (
    <div className='createBook'>
      <h1>Create a new book</h1>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" className='formInputCB' name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <br/>
        <label htmlFor="author">Author</label>
        <input type="text" className='formInputCB' name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        <br/>
        <label htmlFor="publishYear">Publish Year</label>
        <input type="text" className='formInputCB' name="publishYear" id="publishYear" value={publishYear} onChange={(e) => setPublishYear(e.target.value)}/>
        <br/>
        <button className='submitBtn' type='submit' onClick={handleBook}>Submit</button>
      </form>
    </div>
  )
}

export default CreateBook