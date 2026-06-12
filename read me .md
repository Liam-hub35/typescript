# Speed Typing Test 

Application web de test de dactylographie en JS/CSS. Elle permet de mesurer sa vitesse de frappe en mots par minute (WPM) et son taux de précision sur des phrases tirées aléatoirement. L'interface colorie les caractères en temps réel et affiche un bilan complet à la fin de chaque phrase.

## Instructions pour lancer le projet localement

Aucune installation de serveur ou de dépendance externe n'est nécessaire.

1. Téléchargez les fichiers du projet dans un même dossier.
2. Assurez-vous d'avoir l'architecture de fichiers suivante :
   - `page.html`
   - `style.css`
   - `main.js`
3. Ouvrez simplement le fichier `page.html` dans n'importe quel navigateur web (Chrome, Firefox, Edge) pour lancer l'application.


## Liste des fonctionnalités implémentées

### Fonctionnalités obligatoires
- **Affichage de phrases aléatoires** : 11 phrases tirées au sort à chaque nouvelle partie.
- **Colorisation en temps réel** : Les caractères corrects s'affichent en vert, les incorrects en rouge souligné.
- **Curseur dynamique** : Le prochain caractère à taper est mis en évidence par un soulignement blanc.
- **Timer automatique** : Le chronomètre démarre au premier caractère tapé et s'arrête dès que la phrase est complète.
- **Calcul du WPM** : Vitesse de frappe calculée selon la formule `(caractères corrects / 5) / (temps en minutes)`.
- **Calcul de la précision** : Taux de réussite calculé selon la formule `(caractères corrects / total de caractères) × 100`.
- **Écran de résultats** : Affichage du temps, du WPM et de la précision à la fin de chaque phrase.
- **Bouton "Nouvelle phrase"** : Réinitialise entièrement la partie et génère une nouvelle phrase.

### Fonctionnalités bonus
- **Suppression bloquée** : Il est impossible de revenir en arrière sur les caractères déjà tapés.
- **Champ désactivé en fin de partie** : La zone de saisie se verrouille automatiquement dès que la phrase est terminée.