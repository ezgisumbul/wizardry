import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

export const SingleBookPage = () => {
  const [book, setBook] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    fetch(`https://api.potterdb.com/v1/books/${slug}`)
      .then((response) => response.json())
      .then((result) => {
        setBook(result.data.attributes);
      })
      .catch((error) => console.log(error));
  }, [slug]);

  if (!book) {
    return null;
  }
  return (
    <div className="book-page-wrapper">
      <header className="book-title">
        {' '}
        {book.title.includes('and')
          ? book.title.split('and').map((str, i) => (
              <Fragment key={i}>
                <p>{str}</p>
                {i % 2 === 0 && <p>and</p>}
              </Fragment>
            ))
          : book.title}
      </header>
      <article className="book-container">
        <div className="book">
          {console.log(book)}
          <div className="cover">
            <img src={book.cover} alt={book.title} className="cover-img" />
          </div>
          <div className="content">
            <h2 className="content-title">Author</h2>
            <p className="content-txt">{book.author}</p>
            <h2 className="content-title">Release Date</h2>
            <p className="content-txt">{book.release_date}</p>
            <h2 className="content-title">Number of Pages</h2>
            <p className="content-txt">{book.pages}</p>
            <h2 className="content-title">Summary</h2>
            <p className="content-txt">{book.summary}</p>
          </div>
        </div>
      </article>
    </div>
  );
};
