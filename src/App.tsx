import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Soft from './pages/Soft/Soft';
import Articles from './pages/Articles/Articles';
import Support from './pages/Support/Support';
import Contacts from './pages/Contacts/Contacts';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="page-layout">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/soft" element={<Soft />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
