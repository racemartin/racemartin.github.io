# Portfolio GitHub Pages — Rafael Cerezo Martin

Site statique prêt pour GitHub Pages.

## Contenu

- `index.html` — page portfolio.
- `assets/css/styles.css` — styles.
- `assets/js/main.js` — filtres de projets.
- `assets/pdfs/` — supports PDF des projets.

## Prévisualiser en local

Depuis ce dossier :

```bash
python3 -m http.server 8080
```

Puis ouvrir :

```text
http://localhost:8080
```

## Publier gratuitement sur GitHub Pages

### Option A — dépôt utilisateur

Créer un dépôt nommé :

```text
racemartin.github.io
```

Puis copier le contenu de ce dossier à la racine du dépôt et pousser :

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin git@github.com:racemartin/racemartin.github.io.git
git push -u origin main
```

Le site sera disponible sur :

```text
https://racemartin.github.io
```

### Option B — dépôt projet

Créer un dépôt par exemple :

```text
portfolio-ai-engineer
```

Pousser ce dossier dans le dépôt, puis dans GitHub :

```text
Settings → Pages → Build and deployment → Source: Deploy from a branch → main / root
```

Le site sera disponible sur :

```text
https://racemartin.github.io/portfolio-ai-engineer/
```

## Note

Les PDFs sont inclus dans `assets/pdfs/`. Le dossier complet fait environ 62 Mo, ce qui reste acceptable pour GitHub Pages. Si tu veux alléger le dépôt, on peut remplacer les PDFs par des liens vers les repos GitHub ou vers des fichiers hébergés ailleurs.
