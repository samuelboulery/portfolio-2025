# Portfolio 2025 - Samuel Boulery

Portfolio optimisé avec focus sur les performances, l'accessibilité et les bonnes pratiques front-end.

## 🚀 Démarrage rapide

### Prérequis

- Node.js 20+ et npm

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build de production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`

### Prévisualisation du build

```bash
npm run preview
```

## 📦 Structure du projet

```
portfolio_2025/
├── fonts/              # Polices locales (Infini)
├── public/             # Fichiers statiques (robots.txt, sitemap.xml)
├── index.html          # Page principale
├── styles.css          # Styles
├── script.js           # JavaScript (ES modules)
├── sw.js              # Service Worker
├── vite.config.js     # Configuration Vite
└── package.json       # Dépendances
```

## ⚡ Optimisations implémentées

### Performances
- ✅ Minification HTML/CSS/JS
- ✅ Compression Gzip/Brotli
- ✅ Preload des ressources critiques
- ✅ Polices locales (pas de Google Fonts)
- ✅ GSAP en local (ES modules)
- ✅ Service Worker pour cache offline
- ✅ Optimisation des assets (SVG minifié)

### SEO
- ✅ Meta tags Open Graph
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Theme-color pour mobile

### Accessibilité
- ✅ Skip link
- ✅ Support prefers-reduced-motion
- ✅ Navigation au clavier
- ✅ ARIA labels
- ✅ Focus states

### Sécurité
- ✅ Headers de sécurité (CSP, X-Frame-Options, etc.)
- ✅ Configuration pour Netlify, Vercel, Apache

### Build & CI/CD
- ✅ Vite pour build optimisé
- ✅ GitHub Actions avec Lighthouse CI
- ✅ Cache busting automatique

## 🔧 Configuration

### Vite

La configuration Vite (`vite.config.js`) inclut :
- Minification avec Terser
- Compression Gzip et Brotli
- Organisation des assets par type
- Source maps désactivées en production

### Service Worker

Le service worker (`sw.js`) met en cache :
- HTML, CSS, JS
- Polices
- Favicon

### Headers de sécurité

Fichiers de configuration disponibles :
- `.htaccess` pour Apache
- `public/_headers` pour Netlify
- `vercel.json` pour Vercel

## 📊 Métriques cibles

- Lighthouse Performance : 95+
- First Contentful Paint : < 1.5s
- Largest Contentful Paint : < 2.5s
- Cumulative Layout Shift : < 0.1
- Total Blocking Time : < 200ms

## 🛠️ Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualise le build
- `npm run lint` - Lint le code (si ESLint configuré)

## 🚀 Déploiement Netlify

Le projet est configuré pour se déployer automatiquement sur Netlify :

1. **Configuration Netlify** (déjà fait via `netlify.toml`) :
   - Build command : `npm run build`
   - Publish directory : `dist`
   - Node version : 20

2. **À chaque push sur `main`**, Netlify :
   - Build automatiquement le projet avec Vite
   - Déploie le dossier `dist/` (fichiers bundlés)
   - GSAP est inclus dans le bundle, plus d'erreur de module

3. **Vérification** :
   - Assurez-vous que dans les paramètres Netlify, le "Publish directory" est bien `dist`
   - Le "Build command" doit être `npm run build`

## 📝 Notes

- Les polices Infini sont chargées localement
- GSAP est importé comme module ES
- Le service worker est enregistré automatiquement
- Les animations respectent `prefers-reduced-motion`

## 🔗 Liens

- [Portfolio](https://samuel.boulery.com)
- [LinkedIn](https://www.linkedin.com/in/samuel-boulery/)

