import { useEffect, useRef, useState } from "react";

type Props = {
  posterUrl: string;
  videoUrl: string;
  alt?: string;
};

export default function HoverVideoThumb({ posterUrl, videoUrl, alt = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hover, setHover] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Fragments YouTube : pas d'aperçu vidéo au survol, juste la miniature statique.
  const isYouTube = videoUrl.includes("youtube.com/embed");

  const onEnter = () => {
    setShouldLoad(true);   // ✅ charge dès le 1er hover (pas via useEffect)
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  // ✅ play/pause se déclenche aussi quand la vidéo vient d’être montée
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (hover) {
      v.currentTime = 0;
      const p = v.play();
      if (p) p.catch(() => {});
    } else {
      v.pause();
    }
  }, [hover, shouldLoad]);

  if (isYouTube) {
    return (
      <img
        src={posterUrl}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-80 group-hover/fragment:opacity-100"
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 origin-center will-change-transform transform-gpu transition-transform duration-700 ease-out ${
        hover ? "scale-105" : "scale-100"
      }`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Image fixe */}
      <img
        src={posterUrl}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          hover ? "opacity-0" : "opacity-60"
        }`}
        loading="lazy"
      />

      {/* Vidéo au hover */}
      {shouldLoad && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
          src={videoUrl}
          muted
          playsInline
          loop
          preload="metadata"
        />
      )}
    </div>
  );
}
