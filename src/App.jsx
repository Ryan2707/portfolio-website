import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import AboutMe from './pages/About me'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App
