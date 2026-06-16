import { useEffect, useRef, useState } from 'react';
import { Play, Award, ExternalLink } from 'lucide-react';
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
  const videoRef = useRef<HTMLVideoElement>(null);

  // Vidéo de fond : se (re)lance depuis le début quand la carte entre dans le
  // viewport, se met en pause quand elle en sort. Muette, sans boucle.
  useEffect(() => {
    if (!film.videoBackground) return;
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          const playback = video.play();
          if (playback) playback.catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [film.videoBackground]);

  const handleFragmentClick = (fragment: Fragment) => {
    setSelectedFragment(fragment);
  };

  const isEven = index % 2 === 0;
  const hasFragments = Boolean(film.fragments && film.fragments.length > 0);
  const showPlaceholder = !film.posterUrl || imageError;

  return (
    <>
      <article className="grid md:grid-cols-2 gap-8 md:gap-12 items-start group">
        <div className={`space-y-8 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <div className="space-y-3">
            <h3 className="font-display text-4xl md:text-5xl font-medium text-white tracking-wide">
              {film.title}
            </h3>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              {film.type ?? film.year}
            </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light italic whitespace-pre-line">
              {film.tagline}
            </p>
          </div>

          {(film.awards?.length || film.festivals?.length) && (
            <div className="space-y-5">
              {film.awards && film.awards.length > 0 && (
                <ul className="space-y-2">
                  {film.awards.map((award, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm">
                      <Award
                        size={18}
                        className="laurel-pulse shrink-0 text-laurel"
                        aria-hidden="true"
                      />
                      <span className="palmares-award font-display text-base font-medium tracking-wide">
                        {award}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {film.festivals && film.festivals.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="flex items-center gap-2 text-xs uppercase tracking-widest text-laurel/70">
                    <Award size={13} aria-hidden="true" />
                    Sélections en festivals
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {film.festivals.map((festival, idx) => (
                      <li
                        key={idx}
                        className="px-3 py-1 text-xs tracking-wide text-gray-300 border border-laurel/30 rounded-full transition-colors duration-500 hover:border-laurel/60 hover:text-white"
                      >
                        {festival}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {hasFragments && (
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-gray-600">Fragments</h4>

              <div className="grid grid-cols-2 gap-3">
                {film.fragments!.map((fragment, idx) => (
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
          )}

          {film.externalUrl && (
            <a
              href={film.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 text-sm tracking-widest uppercase text-gray-300 border border-gray-700 hover:border-gray-500 hover:text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
            >
              <ExternalLink size={16} aria-hidden="true" />
              {film.externalLabel ?? 'Voir le projet'}
            </a>
          )}
        </div>

        <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <div className="relative aspect-[2/3] bg-black rounded overflow-hidden border border-gray-900 group-hover:shadow-2xl group-hover:shadow-white/5 transition-shadow duration-700">
            {film.videoBackground ? (
              <video
                ref={videoRef}
                src={film.videoBackground}
                className="w-full h-full object-cover"
                muted
                playsInline
                preload="metadata"
                aria-label={`Aperçu de ${film.title}`}
              />
            ) : !showPlaceholder ? (
              <img
                src={film.posterUrl}
                alt={`Affiche de ${film.title}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : (
              /* Placeholder sobre : fond noir + titre, en attendant l'affiche définitive */
              <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-gray-950 to-black">
                <span className="font-display text-3xl md:text-4xl font-medium text-white tracking-wide">
                  {film.title}
                </span>
                {film.type && (
                  <span className="mt-3 text-[11px] uppercase tracking-[0.3em] text-gray-600">
                    {film.type}
                  </span>
                )}
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
