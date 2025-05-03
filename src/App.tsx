import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import ToolsShowcase from './components/CodeEditor';
import Blog from './components/Blog';
import Community from './components/Community';
import Footer from './components/Footer';
import GuidePage from './pages/GuidePage';
import ToolsPage from './pages/ToolsPage';
import BestPracticesPage from './pages/BestPracticesPage';
import TutorialsPage from './pages/TutorialsPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={
              <Layout>
                <Hero />
                <Features />
                <ToolsShowcase />
                <Blog />
                <Community />
                <Footer />
              </Layout>
            } />
            <Route path="/guides" element={<GuidePage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/best-practices" element={<BestPracticesPage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;