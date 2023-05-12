import { useEffect, useState } from 'react';
import './index.css';

export const BooksPage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('https://api.potterdb.com/v1/books')
      .then((response) => response.json())
      .then((result) => {
        setBooks(result.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="books-page">
      <h1>Books</h1>
      {console.log(books)}
      <div className="books-wrapper">
        {/* <div className="front-cover"></div>
        <div className="back-cover"></div>
        <div className="side-cover"></div> */}
        <div className="books">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/* <span></span>
          <span></span> */}
        </div>
      </div>
    </div>
  );
};
