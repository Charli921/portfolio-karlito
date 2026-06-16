import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Films from './components/Films';
import About from './components/About';
import Contact from './components/Contact';
import MentionsLegales from './pages/MentionsLegales';

function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <hr className="section-rule max-w-6xl mx-auto" />
      <Films />
      <hr className="section-rule max-w-6xl mx-auto" />
      <About />
      <hr className="section-rule max-w-6xl mx-auto" />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </div>
  );
}

export default App;
