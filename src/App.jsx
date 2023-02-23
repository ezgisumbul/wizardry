import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpellsPage } from './features/spells-page/index.jsx';
import Navbar from './components/navbar/Navbar';
import { SingleSpellPage } from './features/single-spell-page/index.jsx';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<SpellsPage />} />
        {/* the following way doesn't work */}
        {/* <Route path="/spells" element={<SpellPage />}>
          <Route path=":slug" element={<SingleSpell />} />
        </Route> */}
        {/* but this below, does */}
        <Route path="/spells" element={<SpellsPage />} />
        <Route path="/spells/:id" element={<SingleSpellPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
