# Architecture du projet

## Vue d'ensemble

Portfolio one-page construit avec React, TypeScript et TailwindCSS. Architecture simple et maintenable, optimisée pour la performance et l'accessibilité.

## Structure des fichiers

```
project/
├── public/
│   └── assets/              # Assets statiques (images, vidéos)
│       ├── posters/
│       ├── fragments/
│       └── portrait.jpg
├── src/
│   ├── components/          # Composants React
│   │   ├── Navigation.tsx   # Menu sticky
│   │   ├── Hero.tsx         # Section d'ouverture
│   │   ├── Films.tsx        # Grille des films
│   │   ├── FilmCard.tsx     # Carte individuelle d'un film
│   │   ├── VideoModal.tsx   # Modal pour les fragments vidéo
│   │   ├── About.tsx        # Section "Ton Regard"
│   │   └── Contact.tsx      # Section contact
│   ├── data/
│   │   ├── content.ts       # Contenu textuel
│   │   └── films.ts         # Données des films
│   ├── App.tsx              # Composant racine
│   ├── main.tsx             # Point d'entrée
│   └── index.css            # Styles globaux + animations
├── index.html
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## Composants

### Navigation.tsx

**Rôle** : Menu de navigation sticky, disparaît au scroll down, réapparaît au scroll up.

**Props** : Aucune

**État** :
- `isVisible` : visibilité du menu
- `lastScrollY` : position de scroll précédente

**Fonctionnalités** :
- Scroll listener avec debounce naturel
- Smooth scroll vers les sections
- Focus states accessibles

### Hero.tsx

**Rôle** : Section d'ouverture plein écran avec phrase signature, nom et CTA.

**Props** : Aucune (utilise `content.hero`)

**Fonctionnalités** :
- Animation fade-in au chargement
- Indicateur de scroll animé
- Bouton CTA avec smooth scroll vers #films

### Films.tsx

**Rôle** : Container de la grille des films.

**Props** : Aucune (utilise `films`)

**Fonctionnalités** :
- Map sur le tableau de films
- Espacement vertical important entre films

### FilmCard.tsx

**Rôle** : Affichage d'un film avec affiche, infos et fragments cliquables.

**Props** :
- `film` : Film (titre, année, tagline, posterUrl, fragments)
- `index` : number (pour alterner la disposition gauche/droite)

**État** :
- `selectedFragment` : fragment vidéo ouvert dans la modal
- `imageError` : gestion du fallback si image manquante

**Fonctionnalités** :
- Layout alterné (pair/impair) entre affiche et texte
- Grid de fragments avec thumbnails
- Ouverture de VideoModal au clic
- Lazy loading des images
- Hover states subtils

### VideoModal.tsx

**Rôle** : Modal plein écran pour lire les fragments vidéo.

**Props** :
- `fragment` : Fragment (label, videoUrl, posterUrl)
- `filmTitle` : string
- `onClose` : fonction de fermeture

**Fonctionnalités** :
- Fermeture par Esc, clic outside, bouton X
- Focus trap (auto-focus sur bouton fermer)
- Blocage du scroll body
- Lecteur vidéo HTML5 avec controls
- Animation d'apparition fade + slide

### About.tsx

**Rôle** : Section textuelle centrale avec portrait optionnel.

**Props** : Aucune (utilise `content.about`)

**Fonctionnalités** :
- Layout portrait + texte (colonnes)
- Responsive : portrait au-dessus sur mobile
- Portrait en grayscale, couleur au hover
- Paragraphes espacés pour respiration


**Rôle** : Section courte listant les principes de travail.

**Props** : Aucune (utilise `content.work`)

**Fonctionnalités** :
- Affichage centré
- Liste de principes avec bordures discrètes

### Contact.tsx

**Rôle** : Section finale avec email et informations de contact.

**Props** : Aucune (utilise `content.contact`)

**Fonctionnalités** :
- Email cliquable (mailto:)
- Infos géographiques avec icônes
- Footer avec copyright

## Données

### content.ts

Contient tout le contenu textuel du site :
- `hero` : phrase, nom, rôles
- `about` : titre, paragraphes, portrait
- `work` : principes de travail
- `contact` : texte, email, localisation

**Type safety** : interfaces explicites pour éviter les erreurs.

### films.ts

Tableau d'objets Film avec :
- Métadonnées (id, titre, année, tagline)
- URL de l'affiche
- Tableau de fragments (label, videoUrl, posterUrl, durée)

**Type safety** : interfaces `Film` et `Fragment` exportées.

## Styles

### Tailwind

**Configuration** : `tailwind.config.js` (configuration par défaut)

**Utilities personnalisées** : dans `src/index.css`
- `.animate-fade-in` : apparition douce (1.2s)
- `.animate-slide-up` : glissement vers le haut (0.5s)
- `.animate-bounce-slow` : bounce lent pour indicateur scroll (3s)

### Design tokens

**Couleurs** :
- Fond : `bg-black`
- Texte principal : `text-white`, `text-gray-100`
- Texte secondaire : `text-gray-300`, `text-gray-400`
- Bordures : `border-gray-700`, `border-gray-800`, `border-gray-900`
- Accents hover : `hover:text-white`, `hover:border-gray-500`

**Espacements** :
- Sections : `py-24` (6rem) à `py-32` (8rem)
- Entre éléments : `space-y-8`, `space-y-12`, `gap-8`
- Containers : `max-w-5xl`, `max-w-6xl`, `mx-auto`

**Typographie** :
- Corps : font-light, text-base/lg
- Titres : text-3xl à text-6xl, tracking-wide
- Line-height : leading-relaxed
- Italique pour citations et taglines

## Performance

### Optimisations images

- `loading="lazy"` sur toutes les images
- Gestion des erreurs de chargement avec fallback
- Format JPEG recommandé (compression)
- Dimensions adaptées (pas de sur-dimensionnement)

### Optimisations vidéos

- `preload="metadata"` : charge uniquement les métadonnées
- Poster image pour affichage avant lecture
- Pas d'autoplay (respect UX et data)
- Ouverture en modal uniquement sur interaction

### Code splitting

- Vite : tree shaking automatique
- Composants lazy-loadable si nécessaire (pas activé par défaut)
- CSS : extraction automatique en production

## Accessibilité

### Navigation clavier

- Focus states visibles (outline, underline)
- Tab navigation dans l'ordre logique
- Enter pour activer liens/boutons
- Escape pour fermer modal

### ARIA

- `role="dialog"` et `aria-modal="true"` sur VideoModal
- `aria-labelledby` pour titre de modal
- `aria-label` sur boutons sans texte (Play, fermer)
- Labels descriptifs sur liens et boutons

### Contraste

- Ratio conforme WCAG AA minimum
- Texte blanc/gris clair sur fond noir
- Bordures visibles sur focus

### Vidéos

- Pas d'autoplay sonore (respect WCAG)
- Controls natifs HTML5 (accessibles par défaut)
- Transcription/description non implémentée (à ajouter si nécessaire)

## Extensions possibles

### Animations avancées (Framer Motion)

Si souhaité, installer `framer-motion` :

```bash
npm install framer-motion
```

Exemple d'intégration dans FilmCard :

```tsx
import { motion } from 'framer-motion';

<motion.article
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {/* contenu */}
</motion.article>
```

### Internationalisation (i18n)

Pour version multi-langues :

1. Installer `react-i18next`
2. Créer `src/locales/fr.json` et `src/locales/en.json`
3. Remplacer textes hardcodés par `t('key')`

### Analytics

Ajouter Google Analytics ou Plausible dans `index.html` ou via composant.

### Formulaire de contact

Remplacer le simple `mailto:` par un formulaire avec :
- React Hook Form
- Service backend (Netlify Forms, Formspree, ou custom)

## Déploiement

### Netlify

1. Connecter le repo GitHub
2. Build command : `npm run build`
3. Publish directory : `dist`
4. Variables d'environnement : aucune nécessaire

### Vercel

```bash
vercel --prod
```

Configuration automatique détectée.

### GitHub Pages

1. Build : `npm run build`
2. Uploader contenu de `dist/` sur branche `gh-pages`
3. Ou utiliser GitHub Actions

---

**Principes de design** : sobriété, espacement, respiration, contraste subtil, accessibilité, performance.
