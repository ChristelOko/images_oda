import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import EngagementsPage from './pages/EngagementsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-serif">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produits" element={<ProductsPage />} />
            <Route path="/notre-histoire" element={<AboutPage />} />
            <Route path="/engagements" element={<EngagementsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;