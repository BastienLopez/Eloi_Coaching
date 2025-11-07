Guide de transfert et déploiement (client)

Objectif: permettre à un client de cloner ce repo, le pousser sur son GitHub et publier directement via GitHub Pages.

1) Ce qu’il faut personnaliser
- Base Vite (chemin du site)
  - Modifie le chemin de base pour la production afin de refléter le nom du dépôt du client.
  - Fichier: `vite.config.ts:13`
    - Remplacer `"/Eloi_Coaching/"` par `"/NOM_DU_REPO/"`.
    - Exemple: si l’URL finale doit être `https://NOM_DU_COMPTE.github.io/NOM_DU_REPO/`, mets `"/NOM_DU_REPO/"`.

2) Paramétrage GitHub Pages du client
- Dans le dépôt du client: Settings → Pages
  - Build and deployment → Source = "GitHub Actions".
