import { content } from '../data/content';

export default function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#films');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/60 pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-12 animate-fade-in">
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-100 leading-relaxed tracking-wide italic">
          "{content.hero.quote}"
        </blockquote>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wider">
            {content.hero.name}
          </h1>
          <p className="text-base md:text-lg text-gray-400 tracking-widest uppercase font-light">
            {content.hero.roles}
          </p>
        </div>

        <button
          onClick={handleClick}
          className="inline-block px-8 py-3 text-sm tracking-widest uppercase text-gray-300 border border-gray-700 hover:border-gray-500 hover:text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
        >
          {content.hero.cta}
        </button>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
      </div>
    </section>
  );
}
