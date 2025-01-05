# Analytical-Dashboard

# API Gestion Produits et Ventes

Cette API permet de gérer les produits, les ventes et les utilisateurs d'une manière simple et efficace. Elle inclut des fonctionnalités pour authentifier les utilisateurs, effectuer des analyses à partir des données de ventes, et sécuriser les opérations grâce à l'authentification JWT.

## 🚀 Fonctionnalités principales

- **Gestion des produits** :
  - Ajouter, mettre à jour et supprimer des produits.
  - Consulter les informations détaillées sur un produit.
  - Rechercher des produits par nom, catégorie ou autres critères.

- **Gestion des ventes** :
  - Enregistrer des ventes et associer les produits concernés.
  - Générer des données pour des analyses et des graphiques.

- **Gestion des utilisateurs** :
  - Créer et authentifier des utilisateurs avec des rôles (admin, client, etc.).
  - Gérer les droits d'accès grâce à l'authentification JWT.

- **Sécurité** :
  - Protection des routes sensibles avec des tokens JWT.
  - Vérification des rôles utilisateur pour restreindre certaines actions.

## 📚 Documentation des Endpoints

### Authentification

| Méthode | Endpoint          | Description                       |
|---------|-------------------|-----------------------------------|
| POST    | `/users/register` | Enregistrer un nouvel utilisateur. |
| POST    | `/users/login`    | Authentifier un utilisateur et obtenir un token JWT. |

### Produits

| Méthode | Endpoint           | Description                          |
|---------|--------------------|--------------------------------------|
| GET     | `/products`    | Récupérer la liste des produits.     |
| POST    | `/products`    | Ajouter un nouveau produit.          |
| PUT     | `/products/:id`| Mettre à jour un produit existant.   |
| DELETE  | `/products/:id`| Supprimer un produit.                |

### Ventes

| Méthode | Endpoint           | Description                          |
|---------|--------------------|--------------------------------------|
| GET     | `/sales`       | Récupérer la liste des ventes.       |
| POST    | `/sales`       | Enregistrer une nouvelle vente.      |
