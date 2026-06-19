import { useState } from 'react';
import { content } from '../data/content';
import VideoModal from './VideoModal';

const showreelFragment = {
  label: 'Bande démo',
  videoUrl: '/assets/SHOWREEL_V2.mp4',
  posterUrl: '',
  durationSec: 0,
};

export default function Hero() {
  const [showreelOpen, setShowreelOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#films');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const letters = Array.from(content.hero.name);

  // Séquence d'apparition : citation d'abord, puis le nom (lettre par lettre),
  // puis les rôles, puis le lien.
  const quoteDelay = 0.3;
  const letterBase = 1.0;
  const letterStep = 0.07;
  const rolesDelay = letterBase + letters.length * letterStep + 0.15;
  const ctaDelay = rolesDelay + 0.25;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-hidden bg-black">
      {/* Showreel en fond : vidéo en loop muette sur desktop. Pas de poster :
          fond noir pendant le chargement (la section est déjà bg-black).
          Sur mobile on ne charge pas la vidéo (autoplay peu fiable / coûteux
          en data) — le fond reste simplement noir. */}
      <video
        className="hidden sm:block absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/assets/showreel.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Voile noir pour assombrir le showreel et garder le contenu lisible */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/60 pointer-events-none" />
      <div className="film-grain" aria-hidden="true" />

      <div className="relative z-10 text-center mx-auto px-6 max-w-4xl space-y-14">
        {/* 1. La citation apparaît en premier */}
        <blockquote
          className="animate-fade-in text-2xl md:text-3xl lg:text-4xl font-light text-gray-100 leading-relaxed tracking-wide italic"
          style={{ animationDelay: `${quoteDelay}s`, animationFillMode: 'both' }}
        >
          "{content.hero.quote}"
        </blockquote>

        <div className="space-y-5">
          {/* 2. Le nom, lettre par lettre. inline-block + text-center du parent
              pour un centrage parfait malgré le letter-spacing de fin. */}
          <h1
            aria-label={content.hero.name}
            className="font-display block w-full max-w-full text-center whitespace-nowrap text-[clamp(1.5rem,7vw,5rem)] font-medium uppercase text-white [--hero-ls:0.04em] sm:[--hero-ls:0.08em] md:[--hero-ls:0.12em]"
          >
            {letters.map((char, idx) => (
              <span
                key={idx}
                aria-hidden="true"
                className="hero-name-letter"
                style={{ animationDelay: `${letterBase + idx * letterStep}s` }}
              >
                {char === ' ' ? ' ' : char}
              </span>
            ))}
          </h1>

          {/* 3. Les rôles, encadrés de deux fines lignes horizontales */}
          <div
            className="animate-fade-in flex items-center justify-center gap-4"
            style={{ animationDelay: `${rolesDelay}s`, animationFillMode: 'both' }}
          >
            <span className="h-px w-10 md:w-16 bg-gray-700" aria-hidden="true" />
            <p className="text-sm md:text-base text-gray-400 tracking-[0.3em] uppercase font-light">
              {content.hero.roles}
            </p>
            <span className="h-px w-10 md:w-16 bg-gray-700" aria-hidden="true" />
          </div>
        </div>

        {/* 4. Les liens, avec une ligne animée au survol / focus */}
        <div
          className="animate-fade-in flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          style={{ animationDelay: `${ctaDelay}s`, animationFillMode: 'both' }}
        >
          <button
            onClick={handleClick}
            className="group relative inline-block text-sm tracking-widest uppercase text-gray-300 hover:text-white transition-colors duration-500 focus:outline-none focus-visible:text-white"
          >
            {content.hero.cta}
            <span
              aria-hidden="true"
              className="absolute -bottom-1.5 left-0 h-px w-full bg-white origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
            />
          </button>

          <button
            onClick={() => setShowreelOpen(true)}
            className="group relative inline-block text-sm tracking-widest uppercase text-gray-300 hover:text-white transition-colors duration-500 focus:outline-none focus-visible:text-white"
          >
            {content.hero.ctaShowreel}
            <span
              aria-hidden="true"
              className="absolute -bottom-1.5 left-0 h-px w-full bg-white origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
            />
          </button>
        </div>
      </div>

      {showreelOpen && (
        <VideoModal
          fragment={showreelFragment}
          filmTitle="Charles Dutel"
          onClose={() => setShowreelOpen(false)}
        />
      )}

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
      </div>
    </section>
  );
}
