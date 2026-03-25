import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AcctDelete from './pages/flippy/AcctDelete';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flippy/privacy" element={<PrivacyPolicy />} />
          <Route path="/flippy/acctDelete" element={<AcctDelete />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
