import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home/Home';
import AboutMe from './pages/About/AboutMe';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import RocketBoost from './components/RocketBoost';

function App() {
  return (
    <BrowserRouter basename="/portfolio-website">
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rocketboost" element={<RocketBoost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;