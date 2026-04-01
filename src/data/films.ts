export interface Fragment {
  label: string;
  videoUrl: string;
  posterUrl: string;
  durationSec: number;
}

export interface Film {
  id: string;
  title: string;
  year: number;
  tagline: string;
  posterUrl: string;
  fragments: Fragment[];
}

export const films: Film[] = [
  {
    id: 'film-1',
    title: 'Le temps d\'un instant',
    year: 2025,
    tagline: 'Et si vous pouviez revivre un instant, qu’en feriez-vous ?',
    posterUrl: '/assets/posters/film1.webp',
    fragments: [
      {
        label: '',
        videoUrl: '/assets/fragments/film1_1.mp4',
        posterUrl: '/assets/fragments/film1_1.png',
        durationSec: 45
      },
      {
        label: '',
        videoUrl: '/assets/fragments/film1_2.mp4',
        posterUrl: '/assets/fragments/film1_2.png',
        durationSec: 38
      },
      {
        label: '',
        videoUrl: '/assets/fragments/film1_3.mp4',
        posterUrl: '/assets/fragments/film1_3.png',
        durationSec: 52
      }
    ]
  },
  {
    id: 'film-2',
    title: 'Vendez-vos Vacances !',
    year: 2025,
    tagline: 'Aujourd’hui, tout a un prix. Même les congés.',
    posterUrl: '/assets/posters/film2.webp',
    fragments: [
      {
        label: '',
        videoUrl: '/assets/fragments/film2_1.mp4',
        posterUrl: '/assets/fragments/film2_1.png',
        durationSec: 41
      },
      {
        label: '',
        videoUrl: '/assets/fragments/film2_2.mp4',
        posterUrl: '/assets/fragments/film2_2.png',
        durationSec: 55
      },
      {
        label: '',
        videoUrl: '/assets/fragments/film2_3.mp4',
        posterUrl: '/assets/fragments/film2_3.png',
        durationSec: 47
      },
      {
        label: '',
        videoUrl: '/assets/fragments/film2_4.mp4',
        posterUrl: '/assets/fragments/film2_4.png',
        durationSec: 33
      }
    ]
  },
  {
    id: 'film-3',
    title: 'Encore une belle journée',
    year: 2025,
    tagline: 'Parfois, être heureux suffit.',
    posterUrl: '/assets/posters/film3.webp',
    fragments: [
      {
        label: '',
        videoUrl: '/assets/fragments/film3_1.mp4',
        posterUrl: '/assets/fragments/film3_1.png',
        durationSec: 49
      },
      {
        label: '',
        videoUrl: '/assets/fragments/film3_2.mp4',
        posterUrl: '/assets/fragments/film3_2.png',
        durationSec: 44
      },
      {
        label: '',
        videoUrl: '/assets/fragments/film3_3.mp4',
        posterUrl: '/assets/fragments/film3_3.png',
        durationSec: 36
      }
    ]
  },
  {
    id: 'film-4',
    title: 'L\'Ombre du Pouvoir',
    year: 2024,
    tagline: 'Premières images d’un projet de long métrage.\nUn thriller politique autour de l’identité et du pouvoir.',
    posterUrl: '/assets/posters/film4.webp',
    fragments: [
      {
        label: '',
        videoUrl: '/assets/fragments/film4_1.mp4',
        posterUrl: '/assets/fragments/film4_1.png',
        durationSec: 39
      },
      {
        label: '',
        videoUrl: '/assets/fragments/film4_2.mp4',
        posterUrl: '/assets/fragments/film4_2.png',
        durationSec: 51
      },
      {
        label: '',
        videoUrl: '/assets/fragments/film4_3.mp4',
        posterUrl: '/assets/fragments/film4_3.png',
        durationSec: 43
      },
      {
        label: '',
        videoUrl: '/assets/fragments/film4_4.mp4',
        posterUrl: '/assets/fragments/film4_4.png',
        durationSec: 43
      }
    ]
  }
];
