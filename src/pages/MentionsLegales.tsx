import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Entry {
  term: string;
  value: React.ReactNode;
}

const entries: Entry[] = [
  { term: 'Éditeur du site', value: 'Charles Dutel, Entrepreneur Individuel' },
  { term: 'Activité', value: 'Réalisateur & Scénariste' },
  {
    term: 'Email',
    value: (
      <a
        href="mailto:charles.dutel@gmail.com"
        className="text-white hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:underline underline-offset-4"
      >
        charles.dutel@gmail.com
      </a>
    )
  },
  { term: 'SIRET', value: '[À COMPLÉTER]' },
  { term: 'Adresse', value: '[À COMPLÉTER]' },
  {
    term: 'Hébergement',
    value:
      'Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA'
  },
  { term: 'Directeur de publication', value: 'Charles Dutel' }
];

export default function MentionsLegales() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="space-y-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white focus:underline underline-offset-4"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Retour à l'accueil
          </Link>

          <h1 className="font-display text-5xl md:text-6xl font-medium tracking-wide">
            Mentions légales
          </h1>
        </div>

        <dl className="space-y-8">
          {entries.map((entry) => (
            <div
              key={entry.term}
              className="grid sm:grid-cols-3 gap-1 sm:gap-6 border-b border-gray-900 pb-6"
            >
              <dt className="text-xs uppercase tracking-widest text-gray-500 sm:pt-1">
                {entry.term}
              </dt>
              <dd className="sm:col-span-2 text-gray-200 font-light leading-relaxed">
                {entry.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="text-gray-600 text-xs tracking-widest">
          © 2026 Charles Dutel — Tous droits réservés
        </p>
      </div>
    </main>
  );
}
