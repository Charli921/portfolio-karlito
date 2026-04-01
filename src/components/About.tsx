import { useState } from 'react';
import { content } from '../data/content';

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="regard" className="min-h-screen bg-black py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-gray-900 border border-gray-800">
              {!imageError ? (
                <img
                  src={content.about.portraitUrl}
                  alt={content.about.portraitAlt}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-700 text-xs text-center px-4">
                    Portrait
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-2 space-y-12">
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide">
              {content.about.title}
            </h2>

            <div className="prose prose-invert prose-lg max-w-prose space-y-8">
              {content.about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-300 leading-relaxed font-light text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
