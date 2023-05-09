import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpellsPage } from './features/spells-page/index.jsx';
import { Navbar } from './components/navbar';
import { SingleSpellPage } from './features/single-spell-page/index.jsx';
import { HomePage } from './features/home-page/index.jsx';
import { MoviesPage } from './features/movies/index.jsx';
import { SingleMoviePage } from './features/single-movie-page/index.jsx';
import { BooksPage } from './features/books/index.jsx';
import { SingleBookPage } from './features/single-book-page/index.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* the following way doesn't work */}
        {/* <Route path="/spells" element={<SpellPage />}>
          <Route path=":slug" element={<SingleSpell />} />
        </Route> */}
        {/* but this below, does */}
        <Route path="/spells">
          <Route index element={<SpellsPage />} />
          <Route path=":slug" element={<SingleSpellPage />} />
        </Route>
        <Route path="/movies">
          <Route index element={<MoviesPage />} />
          <Route path=":slug" element={<SingleMoviePage />} />
        </Route>
        <Route path="/books">
          <Route index element={<BooksPage />} />
          <Route path=":slug" element={<SingleBookPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
