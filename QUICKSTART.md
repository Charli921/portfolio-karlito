# Démarrage rapide

## Installation

```bash
npm install
npm run dev
```

Ouvrez `http://localhost:5173`

## Première personnalisation (5 minutes)

### 1. Vos informations

Éditez `src/data/content.ts` :

```typescript
hero: {
  quote: "Votre phrase signature",
  name: "Prénom Nom",
  roles: "Réalisateur, Scénariste",
},
contact: {
  email: "votre@email.com",
  location: "Votre ville",
}
```

### 2. Titre du site

Éditez `index.html` ligne 7 :

```html
<title>Votre Nom - Réalisateur</title>
```

### 3. Tester

Sauvegardez, retournez sur `http://localhost:5173`, le site se met à jour automatiquement.

## Ajout de vos films

### 1. Préparez vos assets

Créez les dossiers :

```bash
mkdir -p public/assets/posters
mkdir -p public/assets/fragments
```

Ajoutez vos fichiers :

```
public/assets/
├── posters/
│   └── mon-film.jpg         (ratio 2:3, ex: 800x1200px)
└── fragments/
    ├── mon-film-1.mp4       (30-60sec, max 10Mo)
    └── mon-film-1_poster.jpg (16:9, ex: 1280x720px)
```

### 2. Éditez les données

Dans `src/data/films.ts`, remplacez le premier film :

```typescript
{
  id: 'mon-premier-film',
  title: 'Titre de votre film',
  year: 2024,
  tagline: 'Une phrase atmosphérique',
  posterUrl: '/assets/posters/mon-film.jpg',
  fragments: [
    {
      label: 'Ouverture',
      videoUrl: '/assets/fragments/mon-film-1.mp4',
      posterUrl: '/assets/fragments/mon-film-1_poster.jpg',
      durationSec: 45
    }
  ]
}
```

### 3. Testez

Rechargez la page. Votre film apparaît dans la section Films. Cliquez sur le fragment pour le voir en modal.

## Déploiement

### Build de production

```bash
npm run build
```

Le dossier `dist/` contient votre site prêt.

### Netlify (recommandé)

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez le dossier `dist/` dans l'interface
3. Votre site est en ligne

OU connectez votre repo GitHub :

- Build command : `npm run build`
- Publish directory : `dist`

### Vercel

```bash
npm install -g vercel
vercel --prod
```

## Documentation complète

- **README.md** : vue d'ensemble, installation, structure
- **PERSONNALISATION.md** : guide détaillé contenu, assets, design
- **ARCHITECTURE.md** : structure technique, composants, performances

## Ressources

### Optimisation images

- [TinyJPG](https://tinyjpg.com) - Compression JPEG/PNG
- [Squoosh](https://squoosh.app) - Compression avancée

### Optimisation vidéos

FFmpeg (terminal) :

```bash
ffmpeg -i input.mov -c:v libx264 -crf 23 -vf scale=1920:1080 output.mp4
```

OU [HandBrake](https://handbrake.fr) (interface graphique)

### Polices

[Google Fonts](https://fonts.google.com) - Privilégier Inter, IBM Plex, Space Grotesk pour la sobriété

## Aide

### Le site ne se charge pas

- Vérifiez que Node.js est installé : `node -v`
- Supprimez `node_modules` et relancez : `npm install`

### Les images ne s'affichent pas

- Vérifiez que les chemins commencent par `/assets/`
- Vérifiez que les fichiers existent dans `public/assets/`
- Ouvrez la console du navigateur (F12) pour voir les erreurs

### Les vidéos ne se lisent pas

- Format recommandé : MP4 H.264
- Testez dans un autre navigateur
- Vérifiez la taille (< 10Mo par fragment)

---

Besoin d'aide ? Consultez PERSONNALISATION.md pour plus de détails.
