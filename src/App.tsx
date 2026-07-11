import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Museum from './pages/Museum/Museum';
import Charity from './pages/Charity/Charity';
import News from './pages/News/News';
import Products from './pages/Products/Products';
import Soft from './pages/Soft/Soft';
import Articles from './pages/Articles/Articles';
import Support from './pages/Support/Support';
import Contacts from './pages/Contacts/Contacts';
import Home from './pages/Home/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/news" element={<News />} />
        <Route path="/products" element={<Products />} />
        <Route path="/soft" element={<Soft />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
