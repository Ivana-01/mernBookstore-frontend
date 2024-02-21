import '../styles/Books.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Books() {
  const [books, setBooks] = useState([]);
 
    useEffect(() => {
        fetch('http://localhost:5555/books')
        .then(res => res.json())
        .then(data => setBooks(data))
        .catch(err => console.log(err))
    }, []);

  
  return (
    <div className='books'>
      <div className="library">
            <div className="options">
                <Link to='/books/create' className='add'>Add Book</Link>
            </div>
            <div className="booksGrid">
             {books.map((book) => (
                    <div className="book" key={book._id}>
                        <div className="bookInfo">
                            <p>{book.author}</p>
                            <h1>{book.title}</h1>
                            <p>{book.publishYear}</p>
                        </div>
                        <div className="bookOptions">
                          <Link to={`/books/${book._id}`} className='bookOptionsLink'>More</Link>
                          <Link to={`/books/delete/${book._id}`} className='bookOptionsLink'>Delete</Link>
                        </div>
                    </div>))};
            </div>
        </div>
    </div>
  )
}

export default Books