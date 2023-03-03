import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpellsPage } from './features/spells-page/index.jsx';
import { Navbar } from './components/navbar';
import { SingleSpellPage } from './features/single-spell-page/index.jsx';
import { HomePage } from './features/home-page/index.jsx';

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
        <Route path="/spells" element={<SpellsPage />} />
        <Route path="/spells/:slug" element={<SingleSpellPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
