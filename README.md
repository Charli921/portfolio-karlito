# Portfolio Cinéma

Portfolio minimaliste one-page pour réalisateur, conçu avec React, TypeScript et TailwindCSS.

## Installation

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## Personnalisation

### 1. Contenu textuel

Modifiez le fichier `src/data/content.ts` pour personnaliser :

- **Hero** : phrase d'ouverture, nom, rôles
- **À propos** : titre, paragraphes, description du portrait
- **Manière de travailler** : titre et principes
- **Contact** : texte, email, localisation, disponibilité

```typescript
export const content = {
  hero: {
    quote: "Votre phrase d'ouverture",
    name: "Votre Nom",
    roles: "Réalisateur, Scénariste",
    // ...
  },
  // ...
};
```

### 2. Films et fragments

Modifiez le fichier `src/data/films.ts` :

```typescript
export const films: Film[] = [
  {
    id: 'film-1',
    title: 'Titre du film',
    year: 2023,
    tagline: 'Une phrase courte sur le film',
    posterUrl: '/assets/posters/film1.jpg',
    fragments: [
      {
        label: 'Nom du fragment',
        videoUrl: '/assets/fragments/film1_1.mp4',
        posterUrl: '/assets/fragments/film1_1_poster.jpg',
        durationSec: 45
      }
    ]
  }
];
```

### 3. Assets

Créez la structure de dossiers suivante dans `public/` :

```
public/
├── assets/
│   ├── posters/           # Affiches des films (ratio 2:3)
│   │   ├── film1.jpg
│   │   ├── film2.jpg
│   │   ├── film3.jpg
│   │   └── film4.jpg
│   ├── fragments/         # Vignettes et vidéos des fragments
│   │   ├── film1_1.mp4
│   │   ├── film1_1_poster.jpg
│   │   ├── film1_2.mp4
│   │   ├── film1_2_poster.jpg
│   │   └── ...
│   └── portrait.jpg       # Votre portrait (format carré)
```

#### Recommandations images :

- **Affiches** : format portrait 2:3 (ex: 800x1200px), JPEG optimisé
- **Posters de fragments** : format 16:9 (ex: 1280x720px), JPEG optimisé
- **Portrait** : format carré (ex: 600x600px), JPEG

#### Recommandations vidéos :

- Format MP4 (H.264)
- Durée : 30-60 secondes par fragment
- Résolution : 1920x1080 ou 1280x720
- Compression optimisée pour le web
- Pas de son nécessaire (ou son ambiance très discret)

### 4. Titre et métadonnées

Modifiez `index.html` :

```html
<title>Votre Nom - Réalisateur</title>
<meta property="og:image" content="lien-vers-votre-image-preview.jpg" />
```

### 5. Couleurs (optionnel)

Le design utilise une palette monochrome noire par défaut. Pour ajuster les nuances, modifiez `tailwind.config.js` :

```javascript
theme: {
  extend: {
    colors: {
      // Ajoutez vos variantes si nécessaire
    }
  }
}
```

## Build de production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`.

## Structure du projet

```
src/
├── components/          # Composants React
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Films.tsx
│   ├── FilmCard.tsx
│   ├── VideoModal.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── data/               # Données
│   ├── content.ts      # Contenu textuel
│   └── films.ts        # Films et fragments
├── App.tsx
├── main.tsx
└── index.css
```

## Accessibilité

Le site respecte les standards d'accessibilité :

- Navigation au clavier
- Focus visibles
- Contraste suffisant
- Labels ARIA
- Vidéos sans autoplay sonore
- Modale avec gestion Escape et focus trap

## Performance

- Images lazy-loaded
- Vidéos en preload="metadata"
- Animations CSS performantes
- Code splitting automatique (Vite)

## Notes

- Les vidéos des fragments s'ouvrent dans une modale légère
- Navigation sticky discrète qui se cache au scroll vers le bas
- Scroll fluide entre les sections
- Responsive mobile/tablette/desktop

---

**Dernière étape** : Remplacez tous les placeholders par vos propres contenus et assets, puis lancez `npm run build` pour la production.
