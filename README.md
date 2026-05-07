# Bistrot le retro

Projet web multi-pages d'un site de restaurant fictif, réalisé dans le cadre d'un exercice pédagogique.

---

##  Structure du projet

```
Bistrot-resto/
├── index.html          # Page d'accueil
├── menu.html           # Menu interactif
├── galerie.html        # Galerie photos
├── reservation.html    # Formulaire de réservation
├── contact.html        # Page contact
│
├── style.css               # Styles globaux (header, footer, nav)
├── stylemenu.css           # Styles page menu
├── stylegalerie.css        # Styles page galerie
├── stylereservation.css    # Styles page réservation
├── stylecontact.css        # Styles page contact
│
├── script.js               # JS page menu (filtres, compteur)
├── galerie.js              # JS lightbox galerie
└── reservation.js          # JS validation formulaire
```

---

##  Pages

### 1. Accueil — `index.html`
- Header sticky avec logo, navigation et menu burger (mobile)
- Hero plein écran avec slogan et bouton de réservation
- Section "Notre histoire"
- Section "3 plats signature"
- Carrousel CSS d'avis clients (transition toutes les 5s)
- Footer avec horaires, adresse et réseaux sociaux

### 2. Menu — `menu.html`
- 20 plats : 5 entrées, 8 plats, 4 desserts, 3 boissons
- Filtres JS cumulatifs : catégorie + végétarien + sans gluten
- Compteur dynamique du nombre de plats visibles
- Animation de fondu à l'apparition/disparition des cartes

### 3. Galerie — `galerie.html`
- Grille CSS de 12 photos minimum
- Lightbox JS au clic : image agrandie, fond noir, bouton fermer
- Navigation précédent/suivant + fermeture par touche Échap
- Hover effect : zoom + filtre couleur

### 4. Réservation — `reservation.html`
- Formulaire complet : nom, prénom, email, téléphone, date, heure, nb personnes, message
- Validation HTML5 (required, pattern, min/max)
- Validation JS : pas le lundi, pas dans le passé, pas à plus de 60 jours, 1 à 12 personnes
- Message de confirmation au submit valide

### 5. Contact — `contact.html`
- Coordonnées en flexbox 2 colonnes
- Carte Google Maps intégrée (iframe)
- Formulaire de contact avec validation HTML5

---

## Technologies


- HTML5 | Structure des pages |
- CSS3 | Mise en page (Flexbox, Grid), animations |
- JavaScript vanilla | Filtres, validation, lightbox |
- Google Maps iframe | Carte page contact |
- Git / GitHub | Versioning et collaboration |

---

## Workflow Git

Le projet utilise une branche par développeur. Les modifications passent par une **Pull Request** vers `dev` avant d'être mergées.

```
ma-branche  →  PR  →  dev  →  (plus tard) main
```

**Pousser son travail :**
```bash
git add .
git commit -m "description du travail"
git push origin ma-branche
# puis créer une PR sur GitHub vers dev
```

**Récupérer le travail des autres :**
```bash
git checkout dev
git pull origin dev
git checkout ma-branche
git merge dev
```



## Statut


| index.html 
| menu.html 
| galerie.html 
| reservation.html 
| contact.html 