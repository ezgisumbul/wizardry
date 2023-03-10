import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './features/home/index.jsx';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
