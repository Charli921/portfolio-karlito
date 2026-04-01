import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Films from './components/Films';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black">
      <Navigation />
      <Hero />
      <Films />
      <About />
      <Contact />
    </div>
  );
}

export default App;
