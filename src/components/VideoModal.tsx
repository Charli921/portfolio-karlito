import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { Fragment } from '../data/films';

interface VideoModalProps {
  fragment: Fragment;
  filmTitle: string;
  onClose: () => void;
}

export default function VideoModal({ fragment, filmTitle, onClose }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current === e.target) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);
    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-5xl mx-4 animate-slide-up">
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
          aria-label="Fermer"
        >
          <X size={28} />
        </button>

        <div className="space-y-4">
          <div className="flex items-baseline gap-3">
            <h2 id="modal-title" className="text-2xl font-light text-white tracking-wide">
              {filmTitle}
            </h2>
            <span className="text-gray-500 text-sm">— {fragment.label}</span>
          </div>

          <div className="relative bg-black aspect-video rounded overflow-hidden">
            <video
              className="w-full h-full"
              controls
              poster={fragment.posterUrl}
              preload="metadata"
            >
              <source src={fragment.videoUrl} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
