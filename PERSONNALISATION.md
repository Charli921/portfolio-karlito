# Guide de personnalisation

## Remplacer le contenu

### Texte et informations

Tous les textes se trouvent dans **`src/data/content.ts`** et **`src/data/films.ts`**.

#### 1. Informations personnelles (`src/data/content.ts`)

```typescript
hero: {
  quote: "Votre phrase signature",    // Phrase d'ouverture
  name: "Prénom Nom",                 // Votre nom
  roles: "Réalisateur, Scénariste",   // Vos rôles
  cta: "Voir les films"               // Texte du bouton
}
```

#### 2. Section À propos

```typescript
about: {
  title: "Ton Regard",
  paragraphs: [
    "Premier paragraphe...",
    "Deuxième paragraphe...",
    // Ajoutez autant de paragraphes que nécessaire
  ],
  portraitUrl: '/assets/portrait.jpg',
  portraitAlt: 'Portrait'
}
```



#### 4. Contact

```typescript
contact: {
  text: "Si vous souhaitez échanger...",
  email: "votre@email.com",          // Votre email réel
  location: "Paris",                  // Votre ville
  availability: "Disponibilité internationale"
}
```

### Films et fragments vidéo (`src/data/films.ts`)

Structure de chaque film :

```typescript
{
  id: 'identifiant-unique',
  title: 'Titre du film',
  year: 2023,
  tagline: 'Une phrase courte, atmosphérique',
  posterUrl: '/assets/posters/nomfichier.jpg',
  fragments: [
    {
      label: 'Nom du fragment',                    // Ex: "Ouverture", "Nuit"
      videoUrl: '/assets/fragments/video.mp4',
      posterUrl: '/assets/fragments/poster.jpg',   // Miniature du fragment
      durationSec: 45                               // Durée en secondes
    }
  ]
}
```

**Conseils** :
- 2 à 4 fragments par film
- Fragments de 30-60 secondes
- Noms évocateurs mais courts

## Ajouter vos assets

### Structure des dossiers

Créez cette structure dans `public/` :

```
public/
└── assets/
    ├── portrait.jpg           # Votre portrait (600x600px carré)
    ├── posters/
    │   ├── film1.jpg         # Affiches au ratio 2:3
    │   ├── film2.jpg
    │   └── ...
    └── fragments/
        ├── film1_1.mp4       # Vidéos courtes
        ├── film1_1_poster.jpg # Miniatures 16:9
        └── ...
```

### Optimisation des images

#### Affiches de films

- **Format** : JPEG
- **Ratio** : 2:3 (portrait)
- **Dimensions recommandées** : 800x1200px ou 1000x1500px
- **Poids** : < 300 Ko par image
- **Outil** : Utilisez [TinyJPG](https://tinyjpg.com) ou [Squoosh](https://squoosh.app)

#### Miniatures de fragments

- **Format** : JPEG
- **Ratio** : 16:9 (paysage)
- **Dimensions recommandées** : 1280x720px
- **Poids** : < 200 Ko par image

#### Portrait

- **Format** : JPEG
- **Dimensions** : 600x600px (carré)
- **Poids** : < 150 Ko
- **Style** : Photo naturelle, fond sobre

### Optimisation des vidéos

#### Conversion et compression

Utilisez **FFmpeg** pour optimiser vos vidéos :

```bash
ffmpeg -i input.mov \
  -c:v libx264 \
  -crf 23 \
  -preset slow \
  -vf scale=1920:1080 \
  -c:a aac \
  -b:a 128k \
  output.mp4
```

**Paramètres expliqués** :
- `-crf 23` : qualité (18-28, plus bas = meilleure qualité)
- `-preset slow` : meilleure compression
- `-vf scale=1920:1080` : résolution Full HD
- `-b:a 128k` : qualité audio réduite (les fragments sont atmosphériques)

#### Recommandations vidéo

- **Format** : MP4 (H.264)
- **Durée** : 30-60 secondes par fragment
- **Résolution** : 1920x1080 (Full HD) ou 1280x720 (HD)
- **Poids** : < 10 Mo par fragment
- **Framerate** : 24 ou 30 fps
- **Son** : facultatif, ambiance discrète si présent

#### Extraire un fragment d'une vidéo longue

```bash
ffmpeg -i film_complet.mov \
  -ss 00:01:30 \
  -t 00:00:45 \
  -c:v libx264 \
  -crf 23 \
  fragment.mp4
```

- `-ss 00:01:30` : démarrer à 1min30
- `-t 00:00:45` : durée de 45 secondes

## Personnaliser le design

### Polices

Le site utilise les polices système par défaut. Pour changer :

1. Importez une police Google Fonts dans `src/index.css` :

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');
```

2. Modifiez `tailwind.config.js` :

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    }
  }
}
```

### Couleurs d'accent (optionnel)

Par défaut, le site est monochrome (noir/blanc/gris). Pour ajouter une couleur d'accent discrète :

1. Dans `tailwind.config.js` :

```javascript
theme: {
  extend: {
    colors: {
      accent: '#3b82f6',  // Bleu discret par exemple
    }
  }
}
```

2. Utilisez-la pour les hovers :

```html
<button className="border-gray-700 hover:border-accent">
```

**Recommandé** : rester sobre avec une seule couleur d'accent, utilisée uniquement pour les interactions.

## Modifier la navigation

Dans `src/components/Navigation.tsx`, changez les ancres :

```typescript
const navLinks = [
  { label: 'Films', href: '#films' },
  { label: 'À propos', href: '#regard' },
  { label: 'Contact', href: '#contact' }
];
```

**Maximum 3 liens** pour garder la sobriété.

## Ajuster les espacements

Si vous trouvez que les sections sont trop espacées (ou pas assez) :

Dans chaque composant, modifiez les classes `py-24` ou `space-y-32` :

- `py-24` : padding vertical (24 × 0.25rem = 6rem = 96px)
- `space-y-32` : espacement entre éléments (32 × 0.25rem = 8rem = 128px)

Exemples :
- Plus compact : `py-16` ou `space-y-20`
- Plus aéré : `py-32` ou `space-y-40`

## Tester localement

```bash
npm run dev
```

Ouvrez `http://localhost:5173` et testez :
- La navigation au clavier (Tab, Enter, Escape)
- Les hovers et focus
- Le responsive (redimensionnez la fenêtre)
- L'ouverture des fragments vidéo

## Déployer

Une fois satisfait :

```bash
npm run build
```

Le dossier `dist/` contient votre site prêt à être déployé sur :
- **Netlify** : glissez le dossier `dist/` ou connectez votre repo Git
- **Vercel** : `vercel --prod`
- **GitHub Pages** : configurez le workflow ou uploadez `dist/`

---

**Conseil final** : gardez le minimalisme. Moins d'effets, moins de couleurs, plus d'air. Laissez respirer vos films.
