# 11 Secrets de Beauté ✨
> Site web officiel et vitrine d'excellence pour l'institut de beauté & spa situé à Genève / Suisse romande.

---

## 🌸 Présentation
**11 Secrets de Beauté** est un institut haut de gamme offrant des rituels de beauté et de bien-être sur-mesure :
- **Soins du Visage & Anti-Âge** : Rituels d'exception avec nos marques partenaires de prestige.
- **Soins du Corps & Massages** : Détente holistique, drainage, gommages et massages signatures.
- **Onglerie & Beauté des Mains/Pieds** : Manucure russe, pose gel/chablon, vernis semi-permanent.
- **Coiffure & Rituels Capillaires** : Diagnostic personnalisé, coupes, couleurs et soins profonds.
- **Épilation & Regard** : Rituels précision, restructuration des sourcils et rehaussement de cils.

---

## 🛠️ Stack Technique & Architecture
Ce projet a été conçu selon les standards les plus exigeants du web moderne :
- **HTML5 Sémantique** : Structure soignée, hiérarchie claire et balisage SEO complet.
- **Vanilla CSS3** : Système de design tokens (`styles/variables.css`), typographie moderne (Playfair Display & Montserrat), palette nude & or champagne, responsive design fluide (`styles/responsive.css`).
- **JavaScript ES Modules (Vanilla JS)** : Architecture modulaire sans framework lourd.
  - `js/components/header.js` : Navigation dynamique avec menu sticky, badge panier/réservation et menu mobile.
  - `js/components/footer.js` : Pied de page complet avec horaires, coordonnées suisses et mentions.
  - `js/components/booking-modal.js` : Modal de réservation interactive multi-étapes avec sélection de soin, date et praticienne.
  - `js/data/` : Centralisation des données (soins, tarifs, marques partenaires, informations institut).

---

## 🚀 Lancement Local

### Option 1 : Serveur PowerShell (inclus)
Un script serveur HTTP local prêt à l'emploi est fourni (`server.ps1`). Pour le démarrer :
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
Le site sera immédiatement disponible à l'adresse :
👉 **http://localhost:8080**

### Option 2 : Tout serveur statique
Vous pouvez également utiliser n'importe quel serveur HTTP statique (VS Code Live Server, `npx serve`, Python `python -m http.server 8080`, etc.).

---

## 📂 Structure du Projet
```
├── contact.html          # Page de contact, plan d'accès et coordonnées
├── index.html            # Page d'accueil / Hero / Prestations phares
├── institut.html         # Présentation de l'institut et de l'équipe
├── marques.html          # Marques partenaires prestigieuses
├── onglerie.html         # Carte détaillée onglerie & manucure
├── partenariat.html      # Devenir partenaire / opportunités
├── soins.html            # Catalogue complet des rituels et soins
├── tarifs.html           # Grille tarifaire détaillée (CHF)
├── server.ps1            # Serveur de développement local PowerShell
├── js/
│   ├── components/       # Composants modulaires (header, footer, modal)
│   ├── data/             # Données structurées (tarifs, soins, marques)
│   └── main.js           # Point d'entrée applicatif
├── styles/
│   ├── base.css          # Réinitialisation et styles de base
│   ├── components.css    # Styles des composants et cartes
│   ├── responsive.css    # Adaptations mobiles, tablettes et desktop
│   └── variables.css     # Tokens de design (couleurs champagne, typographies)
└── public/
    └── images/           # Visuels HD et photographies de l'institut
```

---

## 📍 Contact & Informations
- **Institut** : 11 Secrets de Beauté
- **Localisation** : Suisse romande
- **Site web actuel de référence** : [11secretsdebeaute.ch](https://11secretsdebeaute.ch/)
