# D&eacute;mo SOMECSS

**[Read in English](README.md)**

Une d&eacute;monstration fonctionnelle de la m&eacute;thodologie SOMECSS, montrant chaque convention de l'article appliqu&eacute;e sur deux vraies pages plut&ocirc;t que dans des extraits isol&eacute;s.

- Version fran&ccedil;aise de l'article : [SOMECSS - Une m&eacute;thodologie CSS hybride et &eacute;volutive](https://medium.com/@tomy.grenier/somecss-une-m%C3%A9thodologie-css-hybride-et-%C3%A9volutive-4acb3cb356a1)
- English article: [SOMECSS - A Scalable Hybrid CSS Methodology](https://medium.com/@tomy.grenier/somecss-a-scalable-hybrid-css-methodology-c435312cda7e)

## Structure

```
site-demo-github/
├── index.html          Page Publications (EN) : usage r&eacute;el de la m&eacute;thodologie
├── components.html     Biblioth&egrave;que de composants (EN)
├── fr/
│   ├── index.html      Page Publications, version fran&ccedil;aise
│   └── components.html Biblioth&egrave;que de composants, version fran&ccedil;aise
├── css/
│   ├── base.css        R&eacute;initialisation, typographie, tokens de conception (custom properties)
│   ├── layout.css      Structure de page, helpers de d&eacute;mo
│   ├── modules.css     Composants r&eacute;utilisables (boutons, cartes, modale, formulaire, liste de publications)
│   ├── states.css      Classes d'&eacute;tat is-/has- et &eacute;tats pilot&eacute;s par ARIA
│   └── themes.css      Variante de th&egrave;me sombre
├── js/
│   └── site.js          JS vanille minimal : toggle de th&egrave;me, modale, disclosure de filtre, recherche
└── README.md
```

Les pages du dossier `fr/` partagent exactement les m&ecirc;mes fichiers `css/` et `js/` que les pages anglaises &agrave; la racine, seul le texte du balisage change. Un lien de bascule de langue est pr&eacute;sent dans le nav de chaque page.

## Quoi regarder

- **Cascade layers** : chaque fichier CSS d&eacute;clare sa propre `@layer`, correspondant &agrave; la structure de fichiers. Voir le d&eacute;but de chaque fichier dans `css/`.
- **Conventions de nommage** : bloc-&eacute;l&eacute;ment (`.modal-title`), bloc--modificateur (`.button--primary`), &eacute;tats `is-`/`has-` (`.is-empty`, `.has-error`).
- **&Eacute;tats pilot&eacute;s par ARIA** : le toggle de filtre dans la sidebar de `index.html`, et la modale sur les deux pages, stylent directement &agrave; partir de `aria-expanded`/`aria-hidden` plut&ocirc;t que de dupliquer l'&eacute;tat dans une classe. Voir `css/states.css`.
- **Jumelage contextuel de classes** : compare la grille standard `.publications-list` &agrave; son override dans `.publications-project`, en contexte r&eacute;el sur `index.html`, et c&ocirc;te &agrave; c&ocirc;te pour comparaison sur `components.html`. Voir `css/modules.css`.
- **Tokens de conception** : toutes les custom properties vivent dans `css/base.css`. `css/themes.css` ne fait que surcharger un sous-ensemble d'entre elles pour `[data-theme="dark"]`.
- **Ordre des propri&eacute;t&eacute;s** : chaque bloc de r&egrave;gle dans `css/` suit le m&ecirc;me ordre bas&eacute; sur le mod&egrave;le de bo&icirc;te d&eacute;crit dans l'article.

## Lancer localement

Aucune &eacute;tape de build. Ouvre `index.html` directement dans un navigateur, ou sers le dossier avec n'importe quel serveur de fichiers statiques.
