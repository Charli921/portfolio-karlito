import { films } from '../data/films';
import FilmCard from './FilmCard';
import Reveal from './Reveal';

export default function Films() {
  return (
    <section id="films" className="min-h-screen bg-black py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-32">
        {films.map((film, index) => (
          <Reveal key={film.id}>
            <FilmCard film={film} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
