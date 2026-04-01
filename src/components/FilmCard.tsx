import { useState } from 'react';
import { Play } from 'lucide-react';
import type { Film, Fragment } from '../data/films';
import VideoModal from './VideoModal';
import HoverVideoThumb from './HoverVideoThumb';

interface FilmCardProps {
  film: Film;
  index: number;
}

export default function FilmCard({ film, index }: FilmCardProps) {
  const [selectedFragment, setSelectedFragment] = useState<Fragment | null>(null);
  const [imageError, setImageError] = useState(false);

  const handleFragmentClick = (fragment: Fragment) => {
    setSelectedFragment(fragment);
  };

  const isEven = index % 2 === 0;

  return (
    <>
      <article className="grid md:grid-cols-2 gap-8 md:gap-12 items-start group">
        <div className={`space-y-8 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-light text-white tracking-wide">
              {film.title}
            </h3>
            <p className="text-gray-500 text-sm tracking-widest">{film.year}</p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light italic whitespace-pre-line">
              {film.tagline}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gray-600">Fragments</h4>

            <div className="grid grid-cols-2 gap-3">
              {film.fragments.map((fragment, idx) => (
                <button
                  key={idx}
                  onClick={() => handleFragmentClick(fragment)}
                  aria-label={`Voir le fragment ${fragment.label}`}
                  className="group/fragment relative aspect-video bg-gray-900 rounded overflow-hidden border border-gray-800 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-white/30
                             z-0 hover:z-10 origin-center will-change-transform transition-transform duration-700 ease-out hover:scale-[1.15]"
                >
                  <HoverVideoThumb
                    posterUrl={fragment.posterUrl}
                    videoUrl={fragment.videoUrl}
                    alt=""
                  />

                  {/* Play: disparaît au hover */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 group-hover/fragment:opacity-0">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 group-hover/fragment:bg-black/70 transition-all duration-300">
                      <Play size={20} className="text-white fill-white" />
                    </div>
                  </div>

                  {/* Label: ne bloque pas le hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 pointer-events-none">
                    <p className="text-xs text-gray-300 tracking-wide">{fragment.label}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <div className="relative aspect-[2/3] bg-gray-900 rounded overflow-hidden group-hover:shadow-2xl group-hover:shadow-white/5 transition-shadow duration-700">
            {!imageError ? (
              <img
                src={film.posterUrl}
                alt={`Affiche de ${film.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-600 text-sm">Image non disponible</p>
              </div>
            )}
          </div>
        </div>
      </article>

      {selectedFragment && (
        <VideoModal
          fragment={selectedFragment}
          filmTitle={film.title}
          onClose={() => setSelectedFragment(null)}
        />
      )}
    </>
  );
}