Application de Gestion de Tâches

Ce projet est une petite application de gestion de tâches. Elle permet d’ajouter des tâches, de les modifier, de les supprimer, et de les filtrer par statut (toutes, actives, terminées).

 Ce dont vous avez besoin

- Node.js : Avant de commencer, assurez-vous que Node.js est installé sur votre ordinateur. Vous pouvez le télécharger ici : https://nodejs.org/en .

Installation

1. Téléchargez les fichiers de ce projet ou copiez-les en utilisant cette commande :

   ```
   git clone https://github.com/Clarkd341/todolist.git
   cd todolist
   

2. Installez JSON Server pour simuler un serveur de base de données. C'est ce qui va garder en mémoire les tâches.

   
   npm install json-server
   

3. Dans le dossier du projet, créez un fichier `db.json` qui va stocker les tâches. Mettez ce contenu de base dedans :


   {
     "tasks": []
   }
   

 Lancer l'application

1. Pour lancer JSON Server et démarrer le stockage des tâches :

   npx json-server --watch db.json --port 3000
  
   Cela va ouvrir JSON Server sur `http://localhost:3000`.

2. Ouvrez ensuite le fichier `index.html` dans votre navigateur pour accéder à l'application.

 Comment utiliser l’application

- Ajouter une tâche : Tapez votre tâche et sa date, puis cliquez sur "+".
- Modifier une tâche: Cliquez sur l’icône en forme de crayon pour changer le texte de la tâche.
- Supprimer une tâche : Cliquez sur l’icône de poubelle pour retirer une tâche de la liste.
- Filtrer les tâches : En haut, utilisez les boutons pour voir toutes les tâches, seulement les tâches actives ou seulement les tâches terminées.
- Marquer une tâche comme terminée : Cochez la case à côté d'une tâche pour la barrer.

 Outils utilisés

- HTML, CSS, JavaScript
- JSON Server pour gérer les données des tâches
