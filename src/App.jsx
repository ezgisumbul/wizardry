import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpellPage from './features/spell/index.jsx';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<SpellPage />} />
        <Route path="/spells" element={<SpellPage />}>
          <Route path=":slug" element={<SpellPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
