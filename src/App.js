import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import ShowBook from './pages/ShowBook';
import Books from './pages/Books';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path='/books/delete/:id' element={<DeleteBook />} />
          <Route path='/books/:id' element={<ShowBook />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
